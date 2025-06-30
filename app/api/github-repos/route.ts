import { NextResponse } from "next/server"

export async function GET() {
  const token = process.env.GITHUB_TOKEN

  if (!token) {
    return NextResponse.json(
      {
        message: "GitHub token not configured. Please add GITHUB_TOKEN environment variable.",
        repos: [],
        source: "error",
      },
      { status: 400 },
    )
  }

  try {
    // First try to get pinned repositories using GraphQL
    const pinnedQuery = `
      query {
        user(login: "suryanshchauhan") {
          pinnedItems(first: 6, types: REPOSITORY) {
            nodes {
              ... on Repository {
                id
                name
                description
                url
                primaryLanguage {
                  name
                }
                repositoryTopics(first: 10) {
                  nodes {
                    topic {
                      name
                    }
                  }
                }
                updatedAt
              }
            }
          }
        }
      }
    `

    const pinnedResponse = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "User-Agent": "Portfolio-App",
      },
      body: JSON.stringify({ query: pinnedQuery }),
    })

    if (pinnedResponse.ok) {
      const pinnedData = await pinnedResponse.json()

      if (pinnedData.data?.user?.pinnedItems?.nodes?.length > 0) {
        const repos = pinnedData.data.user.pinnedItems.nodes.map((repo: any, index: number) => ({
          id: index + 1,
          name: repo.name,
          description: repo.description,
          html_url: repo.url,
          language: repo.primaryLanguage?.name || null,
          topics: repo.repositoryTopics?.nodes?.map((topic: any) => topic.topic.name) || [],
          updated_at: repo.updatedAt,
        }))

        return NextResponse.json({
          repos,
          source: "pinned",
        })
      }
    }

    // Fallback to recent repositories
    const recentResponse = await fetch("https://api.github.com/users/suryanshchauhan/repos?sort=updated&per_page=6", {
      headers: {
        Authorization: `Bearer ${token}`,
        "User-Agent": "Portfolio-App",
      },
    })

    if (recentResponse.ok) {
      const recentRepos = await recentResponse.json()

      const repos = recentRepos.map((repo: any) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        language: repo.language,
        topics: repo.topics || [],
        updated_at: repo.updated_at,
      }))

      return NextResponse.json({
        repos,
        source: "recent",
      })
    }

    // If both fail, return error
    return NextResponse.json(
      {
        message: "Failed to fetch repositories from GitHub API",
        repos: [],
        source: "error",
      },
      { status: 500 },
    )
  } catch (error) {
    console.error("GitHub API Error:", error)
    return NextResponse.json(
      {
        message: "Error connecting to GitHub API",
        repos: [],
        source: "error",
      },
      { status: 500 },
    )
  }
}

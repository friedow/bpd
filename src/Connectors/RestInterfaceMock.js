class RESTInterfaceMock {

    open(requestMethod, api, async) {
        this.api = api;
    }

    sendRequest() {

    }

    setHeader(header, acceptedResponse) {

    }

    static getFrontendBranches() {
      return [
        {
          "name": "BP-0119_Visualize_data_from_REST",
          "commit": {
            "sha": "239b7235dae9365b097ee02a0b2730e866d6fdf6",
            "url": "https://api.github.com/repos/bptlab/argos-frontend/commits/239b7235dae9365b097ee02a0b2730e866d6fdf6"
          }
        },
        {
          "name": "BP-186_Async_data_fetching",
          "commit": {
            "sha": "19b2325ac2ad5e906647165c0ce9cca9adb373d9",
            "url": "https://api.github.com/repos/bptlab/argos-frontend/commits/19b2325ac2ad5e906647165c0ce9cca9adb373d9"
          }
        },
        {
          "name": "BP-199_Hiding_states",
          "commit": {
            "sha": "dba6e479bcd4de674e9ab73ccf38e89b45e6ee8f",
            "url": "https://api.github.com/repos/bptlab/argos-frontend/commits/dba6e479bcd4de674e9ab73ccf38e89b45e6ee8f"
          }
        },
        {
          "name": "BP-204_Get_to_know_JEST",
          "commit": {
            "sha": "0397b1c7c113a0da569c8aa18bb62f2e16ddd9e3",
            "url": "https://api.github.com/repos/bptlab/argos-frontend/commits/0397b1c7c113a0da569c8aa18bb62f2e16ddd9e3"
          }
        },
        {
          "name": "BP-206_Tests_for_OverviewPage",
          "commit": {
            "sha": "35b4480455a2d900b4cdaad993b9636c28b2320b",
            "url": "https://api.github.com/repos/bptlab/argos-frontend/commits/35b4480455a2d900b4cdaad993b9636c28b2320b"
          }
        },
        {
          "name": "BP-209_Coderefactoring_DetailView",
          "commit": {
            "sha": "a6ba20366ce9d695782f2ede41282f47b1ad1a82",
            "url": "https://api.github.com/repos/bptlab/argos-frontend/commits/a6ba20366ce9d695782f2ede41282f47b1ad1a82"
          }
        },
        {
          "name": "BP_0086_identify-react-components",
          "commit": {
            "sha": "58988fc2e5dd2e572141c7640a77f48caa7981e0",
            "url": "https://api.github.com/repos/bptlab/argos-frontend/commits/58988fc2e5dd2e572141c7640a77f48caa7981e0"
          }
        },
        {
          "name": "BP_0091_render-react-components",
          "commit": {
            "sha": "2eaf8dd049aa9165614336e2c6a74700ae197008",
            "url": "https://api.github.com/repos/bptlab/argos-frontend/commits/2eaf8dd049aa9165614336e2c6a74700ae197008"
          }
        },
        {
          "name": "BP_0116_setup-sonarqube",
          "commit": {
            "sha": "55f1982bfb82b8273cbed82c873d360feb88bc5b",
            "url": "https://api.github.com/repos/bptlab/argos-frontend/commits/55f1982bfb82b8273cbed82c873d360feb88bc5b"
          }
        },
        {
          "name": "BP_0117_Implement_ProductFetcher_for_REST",
          "commit": {
            "sha": "d9217bddcfd377aa8e4f80e8f94cd1f7208f2678",
            "url": "https://api.github.com/repos/bptlab/argos-frontend/commits/d9217bddcfd377aa8e4f80e8f94cd1f7208f2678"
          }
        },
        {
          "name": "BP_0118_rendering_product_view",
          "commit": {
            "sha": "af6b9c7b91428cd5a59380717f71e84a9d258266",
            "url": "https://api.github.com/repos/bptlab/argos-frontend/commits/af6b9c7b91428cd5a59380717f71e84a9d258266"
          }
        },
        {
          "name": "BP_0148_routing",
          "commit": {
            "sha": "3dbaca50f47b217e57b73379950c6e9909213355",
            "url": "https://api.github.com/repos/bptlab/argos-frontend/commits/3dbaca50f47b217e57b73379950c6e9909213355"
          }
        },
        {
          "name": "BP_0156_deploying-frontend",
          "commit": {
            "sha": "7d342c016f47629cc9420b8300cad1230304cd0d",
            "url": "https://api.github.com/repos/bptlab/argos-frontend/commits/7d342c016f47629cc9420b8300cad1230304cd0d"
          }
        },
        {
          "name": "BP_0178_make-frontend-responsive-again",
          "commit": {
            "sha": "a0aab55784c26b02024ba5639d1f4b5cf7328952",
            "url": "https://api.github.com/repos/bptlab/argos-frontend/commits/a0aab55784c26b02024ba5639d1f4b5cf7328952"
          }
        },
        {
          "name": "BP_208_refactoring_dashboard_view",
          "commit": {
            "sha": "1ecacf0468c0570962bb99b1ec4f393a76143bf6",
            "url": "https://api.github.com/repos/bptlab/argos-frontend/commits/1ecacf0468c0570962bb99b1ec4f393a76143bf6"
          }
        },
        {
          "name": "BP_0255_travis",
          "commit": {
            "sha": "f610e8fd1daa4f9103875e4a86b59d0204c9aa77",
            "url": "https://api.github.com/repos/bptlab/argos-frontend/commits/f610e8fd1daa4f9103875e4a86b59d0204c9aa77"
          }
        },
        {
          "name": "developer",
          "commit": {
            "sha": "2959ad8e875384782dc4c5159ebe1797a685b763",
            "url": "https://api.github.com/repos/bptlab/argos-frontend/commits/2959ad8e875384782dc4c5159ebe1797a685b763"
          }
        },
        {
          "name": "hotfix",
          "commit": {
            "sha": "53a36c0a8eb66cf50031f1840efb6b19db45caf4",
            "url": "https://api.github.com/repos/bptlab/argos-frontend/commits/53a36c0a8eb66cf50031f1840efb6b19db45caf4"
          }
        },
        {
          "name": "jenkins-ci",
          "commit": {
            "sha": "6bda754a4b2aebad71335431cd66d5c36325b0ce",
            "url": "https://api.github.com/repos/bptlab/argos-frontend/commits/6bda754a4b2aebad71335431cd66d5c36325b0ce"
          }
        },
        {
          "name": "master",
          "commit": {
            "sha": "3514bfe235f3cdf3b70b669965b3b6fa9accc980",
            "url": "https://api.github.com/repos/bptlab/argos-frontend/commits/3514bfe235f3cdf3b70b669965b3b6fa9accc980"
          }
        },
        {
          "name": "styling",
          "commit": {
            "sha": "31b033db0695c5f8303cb954c496659691ce87e6",
            "url": "https://api.github.com/repos/bptlab/argos-frontend/commits/31b033db0695c5f8303cb954c496659691ce87e6"
          }
        }
      ];
    }

    static getBackendBranches() {
      return [
        {
          "name": "dev",
          "commit": {
            "sha": "7ce52b9d78fe5f9c9792c0ae7634e85e1acd99c8",
            "url": "https://api.github.com/repos/bptlab/argos-backend/commits/7ce52b9d78fe5f9c9792c0ae7634e85e1acd99c8"
          }
        },
        {
          "name": "master",
          "commit": {
            "sha": "a1e2c8c5d631b4d73ad7b9cf79c17de6839873be",
            "url": "https://api.github.com/repos/bptlab/argos-backend/commits/a1e2c8c5d631b4d73ad7b9cf79c17de6839873be"
          }
        }
      ];
    }

    static getBranchInfo() {
      return {
        "name": "BP-0119_Visualize_data_from_REST",
        "commit": {
          "sha": "239b7235dae9365b097ee02a0b2730e866d6fdf6",
          "commit": {
            "author": {
              "name": "Julian",
              "email": "julian.weise@student.hpi.uni-potsdam.de",
              "date": "2017-01-26T10:33:16Z"
            },
            "committer": {
              "name": "Julian",
              "email": "julian.weise@student.hpi.uni-potsdam.de",
              "date": "2017-01-26T10:33:16Z"
            },
            "message": "Fixed Build-Commands",
            "tree": {
              "sha": "a54613b89b3c12ade31d4d3fc146ce4d1804e24b",
              "url": "https://api.github.com/repos/bptlab/argos-frontend/git/trees/a54613b89b3c12ade31d4d3fc146ce4d1804e24b"
            },
            "url": "https://api.github.com/repos/bptlab/argos-frontend/git/commits/239b7235dae9365b097ee02a0b2730e866d6fdf6",
            "comment_count": 0
          },
          "url": "https://api.github.com/repos/bptlab/argos-frontend/commits/239b7235dae9365b097ee02a0b2730e866d6fdf6",
          "html_url": "https://github.com/bptlab/argos-frontend/commit/239b7235dae9365b097ee02a0b2730e866d6fdf6",
          "comments_url": "https://api.github.com/repos/bptlab/argos-frontend/commits/239b7235dae9365b097ee02a0b2730e866d6fdf6/comments",
          "author": {
            "login": "julianweise",
            "id": 9257781,
            "avatar_url": "https://avatars.githubusercontent.com/u/9257781?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/julianweise",
            "html_url": "https://github.com/julianweise",
            "followers_url": "https://api.github.com/users/julianweise/followers",
            "following_url": "https://api.github.com/users/julianweise/following{/other_user}",
            "gists_url": "https://api.github.com/users/julianweise/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/julianweise/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/julianweise/subscriptions",
            "organizations_url": "https://api.github.com/users/julianweise/orgs",
            "repos_url": "https://api.github.com/users/julianweise/repos",
            "events_url": "https://api.github.com/users/julianweise/events{/privacy}",
            "received_events_url": "https://api.github.com/users/julianweise/received_events",
            "type": "User",
            "site_admin": false
          },
          "committer": {
            "login": "julianweise",
            "id": 9257781,
            "avatar_url": "https://avatars.githubusercontent.com/u/9257781?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/julianweise",
            "html_url": "https://github.com/julianweise",
            "followers_url": "https://api.github.com/users/julianweise/followers",
            "following_url": "https://api.github.com/users/julianweise/following{/other_user}",
            "gists_url": "https://api.github.com/users/julianweise/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/julianweise/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/julianweise/subscriptions",
            "organizations_url": "https://api.github.com/users/julianweise/orgs",
            "repos_url": "https://api.github.com/users/julianweise/repos",
            "events_url": "https://api.github.com/users/julianweise/events{/privacy}",
            "received_events_url": "https://api.github.com/users/julianweise/received_events",
            "type": "User",
            "site_admin": false
          },
          "parents": [
            {
              "sha": "4c2ad7d8b4e1c5800fbe774ae70269e9648210a7",
              "url": "https://api.github.com/repos/bptlab/argos-frontend/commits/4c2ad7d8b4e1c5800fbe774ae70269e9648210a7",
              "html_url": "https://github.com/bptlab/argos-frontend/commit/4c2ad7d8b4e1c5800fbe774ae70269e9648210a7"
            }
          ]
        },
        "_links": {
          "self": "https://api.github.com/repos/bptlab/argos-frontend/branches/BP-0119_Visualize_data_from_REST",
          "html": "https://github.com/bptlab/argos-frontend/tree/BP-0119_Visualize_data_from_REST"
        }
      };
    }

    static getLatestBuildInfo() {
      return {
        "branch": {
          "id": 201503733,
          "repository_id": 12078406,
          "commit_id": 57693173,
          "number": "25",
          "config": {
            "dist": "trusty",
            "language": "node_js",
            "node_js": "6",
            "addons": {
              "sonarqube": {
                "branches": [
                  ".*"
                ]
              }
            },
            "install": [
              "npm install"
            ],
            "script": [
              "sonar-scanner -Dsonar.host.url=$SONAR_HOST_URL -Dsonar.login=$SONAR_AUTH_TOKEN -Dsonar.branch=$TRAVIS_BRANCH",
              "npm test",
              "npm build"
            ],
            "notifications": {
              "email": false,
              "slack": {
                "secure": "ZwCTLyOBNOND78fAXsptY3wp/sIuLIT/hJzTdN4VNAd5kpAytOo4B4XajgmzA+p8pnIF5OP0mCcab9S1VLrBqC0DUreqTuaKQW1NwL6RyhW3wtsdtc7y66+aORr1MS0VX4FWYl2DeIUnsezLFjwTd9vukzmuF+MUHKHS06t0eubcD+e+Lm2wXoc3NoC25w0i0RSLtWKNHZCsaClLQX+42fqIHDjs58Mt8Q4Ut5vKULS094FqrmRkDXog4L6Og1QpLs5ItinF02YHzYQBs+88NBEwtLjLeArAzWHj8P8HQcw1HNbfd9dlCMxUglGJKHbHWeHuRmsUuz+sp80wlVOS4uaqDbhEB6z5r1mSN0IqHg97UMWS7wKmy3U8mUzkzc0RPLYcYHsJfychQxAEUAya+d/OLQryaiPIVA/ZZQXBmxhwHCHNhvH83mpljTmDTf5vXLuz2oLK0QRYEM9dwCU005q1Yu57HGYTJurqPwZR02Cmk5FF5IgIyIm89a/wVLK+cVR8kF88LyBqdAPkMWOwsHvMhdHODlCsQrvK178uSVXwHBGGB39C26x93cSaF1zCgDOnFkhb8T8Ar4p1JpQt/w5aIZ41kyRkQr/1aPLZWOmx7WlInCMHYJ4xTSZhj6s/3D44FeRhNHVrDkQ8u5/EP07RFN699JUO5fVECRtksWo="
              }
            },
            ".result": "configured",
            "group": "stable"
          },
          "state": "passed",
          "started_at": "2017-02-14T13:18:51Z",
          "finished_at": "2017-02-14T13:21:07Z",
          "duration": 136,
          "job_ids": [
            201503734
          ],
          "pull_request": false
        },
        "commit": {
          "id": 57693173,
          "sha": "2959ad8e875384782dc4c5159ebe1797a685b763",
          "branch": "developer",
          "message": "Merge pull request #1 from bptlab/BP_0255_travis\n\nBp 0255 travis",
          "committed_at": "2017-02-14T13:18:45Z",
          "author_name": "julianweise",
          "author_email": "julianweise@users.noreply.github.com",
          "committer_name": "GitHub",
          "committer_email": "noreply@github.com",
          "compare_url": "https://github.com/bptlab/argos-frontend/compare/9af69145cc24...2959ad8e8753"
        }
      };
    }

    getResponse() {
        if(this.api.endsWith("bptlab/argos-frontend/branches")) {
                return JSON.stringify(RESTInterfaceMock.getFrontendBranches());
        } else if(this.api.endsWith("bptlab/argos-backend/branches")) {
                return JSON.stringify(RESTInterfaceMock.getBackendBranches());
        } else if (this.api.startsWith("https://api.travis-ci.") && this.api.indexOf("/branches/") > -1) {
                return (JSON.stringify(RESTInterfaceMock.getLatestBuildInfo()));
        } else if(this.api.indexOf("/branches/") > -1) {
                return (JSON.stringify(RESTInterfaceMock.getBranchInfo()));
        } else {
                console.log(this.api);
                return (JSON.stringify(""));
        }
    }

}
export default RESTInterfaceMock;

/* eslint-disable no-plusplus */
const express = require('express');

const axios = require('axios');

const router = express.Router();

const developers = [{
    id: 'subham2107',
    avatar_url: 'https://avatars.githubusercontent.com/u/46347405?v=4',
    myName: 'Subham Mitra',
    company: null,
    blog: 'https://www.linkedin.com/in/subham-mitra/',
    location: 'Kolkata, India',
    email: null,
    bio: 'Full-Stack Developer',
    github_id: 'subham2107',
    linkedin_id: 'subham-mitra',
    codechef_id: 'subham2107',
    hackerrank_id: 'subham2107',
    twitter_id: 'subham2107',
    medium_id: 'subham.mitra21',
    repos: [
      {
        name: 'tru-yum',
        html_url: 'https://github.com/subham2107/tru-yum',
        description: null,
        updated_at: '2021-09-08T17:28:17Z'
      },
      {
        name: 'gallery-app',
        html_url: 'https://github.com/subham2107/gallery-app',
        description: null,
        updated_at: '2021-09-01T11:18:17Z'
      },
      {
        name: 'mock-machine-coding-1',
        html_url: 'https://github.com/subham2107/mock-machine-coding-1',
        description: null,
        updated_at: '2021-06-05T20:33:34Z'
      },
      {
        name: 'Encoder-Decoder',
        html_url: 'https://github.com/subham2107/Encoder-Decoder',
        description: null,
        updated_at: '2021-06-04T04:59:31Z'
      },
      {
        name: 'review-portal',
        html_url: 'https://github.com/subham2107/review-portal',
        description: null,
        updated_at: '2021-06-01T04:19:56Z'
      },
      {
        name: 'Portfolio',
        html_url: 'https://github.com/subham2107/Portfolio',
        description: null,
        updated_at: '2021-05-30T15:09:03Z'
      },
      {
        name: 'currency-converter',
        html_url: 'https://github.com/subham2107/currency-converter',
        description: null,
        updated_at: '2021-05-15T13:18:36Z'
      },
      {
        name: 'deep-learning-with-python-notebooks',
        html_url: 'https://github.com/subham2107/deep-learning-with-python-notebooks',
        description: 'Jupyter notebooks for the code samples of the book "Deep Learning with Python"',
        updated_at: '2021-04-21T22:40:52Z'
      },
      {
        name: 'dev-profile',
        html_url: 'https://github.com/subham2107/dev-profile',
        description: null,
        updated_at: '2021-04-19T04:17:40Z'
      },
      {
        name: 'mern-app',
        html_url: 'https://github.com/subham2107/mern-app',
        description: null,
        updated_at: '2021-03-22T10:12:24Z'
      },
      {
        name: 'Timestamp-Converter',
        html_url: 'https://github.com/subham2107/Timestamp-Converter',
        description: null,
        updated_at: '2021-03-19T13:42:34Z'
      },
      {
        name: 'Color-Converter',
        html_url: 'https://github.com/subham2107/Color-Converter',
        description: null,
        updated_at: '2021-03-18T20:04:07Z'
      },
      {
        name: 'url-shortener',
        html_url: 'https://github.com/subham2107/url-shortener',
        description: null,
        updated_at: '2021-03-16T08:18:27Z'
      },
      {
        name: 'utility-website',
        html_url: 'https://github.com/subham2107/utility-website',
        description: null,
        updated_at: '2021-03-16T04:00:57Z'
      },
      {
        name: 'Number-Base-Converter',
        html_url: 'https://github.com/subham2107/Number-Base-Converter',
        description: null,
        updated_at: '2021-03-16T03:52:37Z'
      },
      {
        name: 'unit-converters-website',
        html_url: 'https://github.com/subham2107/unit-converters-website',
        description: null,
        updated_at: '2021-03-16T03:50:14Z'
      },
      {
        name: 'Quizee',
        html_url: 'https://github.com/subham2107/Quizee',
        description: null,
        updated_at: '2021-03-14T15:04:11Z'
      },
      {
        name: 'JS-Events',
        html_url: 'https://github.com/subham2107/JS-Events',
        description: null,
        updated_at: '2021-03-09T15:42:18Z'
      },
      {
        name: 'String-Utilities',
        html_url: 'https://github.com/subham2107/String-Utilities',
        description: null,
        updated_at: '2021-03-01T18:32:52Z'
      },
      {
        name: 'express-project',
        html_url: 'https://github.com/subham2107/express-project',
        description: null,
        updated_at: '2021-02-21T07:50:20Z'
      },
      {
        name: 'RGB-Hex-Converter',
        html_url: 'https://github.com/subham2107/RGB-Hex-Converter',
        description: null,
        updated_at: '2021-02-11T14:13:37Z'
      },
      {
        name: 'GroceryStoreManagementSystem',
        html_url: 'https://github.com/subham2107/GroceryStoreManagementSystem',
        description: null,
        updated_at: '2021-02-11T03:27:40Z'
      },
      {
        name: 'component-library',
        html_url: 'https://github.com/subham2107/component-library',
        description: null,
        updated_at: '2021-01-25T16:22:53Z'
      },
      {
        name: 'URL-Encoder-Decoder',
        html_url: 'https://github.com/subham2107/URL-Encoder-Decoder',
        description: null,
        updated_at: '2021-01-23T12:53:00Z'
      },
      {
        name: 'Base64-Encoding-Decoding',
        html_url: 'https://github.com/subham2107/Base64-Encoding-Decoding',
        description: null,
        updated_at: '2021-01-23T12:47:42Z'
      },
      {
        name: 'String-Hashing',
        html_url: 'https://github.com/subham2107/String-Hashing',
        description: null,
        updated_at: '2021-01-23T12:44:39Z'
      },
      {
        name: 'Unit-Converter',
        html_url: 'https://github.com/subham2107/Unit-Converter',
        description: null,
        updated_at: '2021-01-23T12:38:47Z'
      },
      {
        name: 'Epoch-Converters',
        html_url: 'https://github.com/subham2107/Epoch-Converters',
        description: null,
        updated_at: '2021-01-23T12:35:55Z'
      },
      {
        name: 'Binary-Decimal-Hex-Octal-Converter',
        html_url: 'https://github.com/subham2107/Binary-Decimal-Hex-Octal-Converter',
        description: null,
        updated_at: '2021-01-22T13:47:53Z'
      },
      {
        name: 'Weather-Application',
        html_url: 'https://github.com/subham2107/Weather-Application',
        description: "A weather application which informs about current location's name, temprature, windspeed, wind-direction and humidity.",
        updated_at: '2020-10-02T03:17:01Z'
      }
    ]
  },
  {
    id: 'facebook',
    avatar_url: 'https://avatars.githubusercontent.com/u/69631?v=4',
    myName: 'Facebook',
    company: null,
    blog: 'https://opensource.fb.com',
    location: 'Menlo Park, California',
    email: null,
    bio: 'We are working to build community through open source technology. NB: members must have two-factor auth.',
    github_id: 'facebook',
    linkedin_id: '',
    codechef_id: '',
    hackerrank_id: '',
    twitter_id: 'Facebook',
    medium_id: 'FBResearch',
    repos: [
      {
        name: 'zstd',
        html_url: 'https://github.com/facebook/zstd',
        description: 'Zstandard - Fast real-time compression algorithm',
        updated_at: '2021-09-09T07:12:31Z'
      },
      {
        name: 'react',
        html_url: 'https://github.com/facebook/react',
        description: 'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
        updated_at: '2021-09-09T07:12:16Z'
      },
      {
        name: 'CacheLib',
        html_url: 'https://github.com/facebook/CacheLib',
        description: 'Pluggable in-process caching engine to build and scale high performance services',
        updated_at: '2021-09-09T07:10:56Z'
      },
      {
        name: 'docusaurus',
        html_url: 'https://github.com/facebook/docusaurus',
        description: 'Easy to maintain open source documentation websites.',
        updated_at: '2021-09-09T07:07:30Z'
      },
      {
        name: 'infer',
        html_url: 'https://github.com/facebook/infer',
        description: 'A static analyzer for Java, C, C++, and Objective-C',
        updated_at: '2021-09-09T07:06:52Z'
      },
      {
        name: 'ThreatExchange',
        html_url: 'https://github.com/facebook/ThreatExchange',
        description: 'Share threat information with vetted partners',
        updated_at: '2021-09-09T07:06:39Z'
      },
      {
        name: 'create-react-app',
        html_url: 'https://github.com/facebook/create-react-app',
        description: 'Set up a modern web app by running one command.',
        updated_at: '2021-09-09T07:06:18Z'
      },
      {
        name: 'react-native',
        html_url: 'https://github.com/facebook/react-native',
        description: 'A framework for building native applications using React',
        updated_at: '2021-09-09T06:57:25Z'
      },
      {
        name: 'fboss',
        html_url: 'https://github.com/facebook/fboss',
        description: 'Facebook Open Switching System\n' +
          '\n' +
          'Software for controlling network switches.',
        updated_at: '2021-09-09T06:57:16Z'
      },
      {
        name: 'fb303',
        html_url: 'https://github.com/facebook/fb303',
        description: 'fb303 is a core set of thrift functions that provide a common mechanism for querying stats and other information from a service.',
        updated_at: '2021-09-09T06:50:45Z'
      },
      {
        name: 'watchman',
        html_url: 'https://github.com/facebook/watchman',
        description: 'Watches files and records, or triggers actions, when they change. ',
        updated_at: '2021-09-09T06:50:28Z'
      },
      {
        name: 'fbzmq',
        html_url: 'https://github.com/facebook/fbzmq',
        description: 'Facebook ZeroMQ wrappers.',
        updated_at: '2021-09-09T06:50:09Z'
      },
      {
        name: 'bistro',
        html_url: 'https://github.com/facebook/bistro',
        description: 'Bistro is a flexible distributed scheduler, a high-performance framework supporting multiple paradigms while retaining ease of configuration, management, and monitoring.',
        updated_at: '2021-09-09T06:50:08Z'
      },
      {
        name: 'openr',
        html_url: 'https://github.com/facebook/openr',
        description: 'Distributed platform for building autonomic network functions.',
        updated_at: '2021-09-09T06:50:08Z'
      },
      {
        name: 'draft-js',
        html_url: 'https://github.com/facebook/draft-js',
        description: 'A React framework for building text editors.',
        updated_at: '2021-09-09T06:44:07Z'
      },
      {
        name: 'flux',
        html_url: 'https://github.com/facebook/flux',
        description: 'Application Architecture for Building User Interfaces',
        updated_at: '2021-09-09T06:43:22Z'
      },
      {
        name: 'mcrouter',
        html_url: 'https://github.com/facebook/mcrouter',
        description: 'Mcrouter is a memcached protocol router for scaling memcached deployments.',
        updated_at: '2021-09-09T06:32:09Z'
      },
      {
        name: 'buck',
        html_url: 'https://github.com/facebook/buck',
        description: 'A fast build system that encourages the creation of small, reusable modules over a variety of platforms and languages.',
        updated_at: '2021-09-09T06:29:12Z'
      },
      {
        name: 'flow',
        html_url: 'https://github.com/facebook/flow',
        description: 'Adds static typing to JavaScript to improve developer productivity and code quality.',
        updated_at: '2021-09-09T06:27:09Z'
      },
      {
        name: 'fbthrift',
        html_url: 'https://github.com/facebook/fbthrift',
        description: "Facebook's branch of Apache Thrift, including a new C++ server.",
        updated_at: '2021-09-09T06:25:01Z'
      },
      {
        name: 'pyre-check',
        html_url: 'https://github.com/facebook/pyre-check',
        description: 'Performant type-checking for python.',
        updated_at: '2021-09-09T06:22:48Z'
      },
      {
        name: 'jest',
        html_url: 'https://github.com/facebook/jest',
        description: 'Delightful JavaScript Testing.',
        updated_at: '2021-09-09T06:14:50Z'
      },
      {
        name: 'openbmc',
        html_url: 'https://github.com/facebook/openbmc',
        description: 'OpenBMC is an open software framework to build a complete Linux image for a Board Management Controller (BMC).',
        updated_at: '2021-09-09T06:07:25Z'
      },
      {
        name: 'hhvm',
        html_url: 'https://github.com/facebook/hhvm',
        description: 'A virtual machine for executing programs written in Hack.',
        updated_at: '2021-09-09T05:55:29Z'
      },
      {
        name: 'folly',
        html_url: 'https://github.com/facebook/folly',
        description: 'An open-source C++ library developed and used at Facebook.',
        updated_at: '2021-09-09T05:52:14Z'
      },
      {
        name: 'proxygen',
        html_url: 'https://github.com/facebook/proxygen',
        description: 'A collection of C++ HTTP libraries including an easy to use HTTP server.',
        updated_at: '2021-09-09T05:38:46Z'
      },
      {
        name: 'fresco',
        html_url: 'https://github.com/facebook/fresco',
        description: 'An Android library for managing images and the memory they use.',
        updated_at: '2021-09-09T05:25:31Z'
      },
      {
        name: 'wangle',
        html_url: 'https://github.com/facebook/wangle',
        description: 'Wangle is a framework providing a set of common client/server abstractions for building services in a consistent, modular, and composable way.',
        updated_at: '2021-09-09T05:14:07Z'
      },
      {
        name: 'prop-types',
        html_url: 'https://github.com/facebook/prop-types',
        description: 'Runtime type checking for React props and similar objects',
        updated_at: '2021-09-09T04:44:05Z'
      },
      {
        name: 'Ax',
        html_url: 'https://github.com/facebook/Ax',
        description: 'Adaptive Experimentation Platform',
        updated_at: '2021-09-09T04:44:02Z'
      }
    ]
  }
  ];

router.get('/', (req, res) => {
const dev = []
    for (let i = 0; i < developers.length; i++) {
        const { id } = developers[i];
        const avatarUrl = developers[i].avatar_url;
        const result = { id, avatar_url: avatarUrl };
        dev.push(result);
    }
    res.status(200).send(dev);
});

router.post('/', (req, res) => {
    const githubId = req.body.github_id;
    const linkedinId = req.body.linkedin_id;
    const codechefId = req.body.codechef_id;
    const hackerrankId = req.body.hackerrank_id;
    const twitterId = req.body.twitter_id;
    const mediumId = req.body.medium_id;
    let id;
    let avatarUrl;
    let myName;
    let repoName;
    let company;
    let blog;
    let location;
    let email;
    let bio;
    let htmlUrl;
    let description;
    let updatedAt;
    let repos = {};
    const reposList = [];

    const promiseUser = axios(`https://api.github.com/users/${githubId}`);
    const promiseRepos = axios(`https://api.github.com/users/${githubId}/repos?sort=updated&direction=desc`);
    Promise.all([promiseUser, promiseRepos])
        .then((responses) => {
            Object.keys(responses[0].data).forEach((key) => {
                req.body[key] = responses[0].data[key];
                id = req.body.login;
                avatarUrl = req.body.avatar_url;
                myName = req.body.name;
                company = req.body.company;
                blog = req.body.blog;
                location = req.body.location;
                email = req.body.email;
                bio = req.body.bio;
            });

            for (let i = 0; i < responses[1].data.length; i++) {
                repoName = responses[1].data[i].name;
                htmlUrl = responses[1].data[i].html_url;
                description = responses[1].data[i].description;
                updatedAt = responses[1].data[i].updated_at;
                repos = {
                    name: repoName,
                    html_url: htmlUrl,
                    description,
                    updated_at: updatedAt,
                };
                reposList.push(repos);
            }

            const alreadyId = developers.some((x) => x.id === id);
            if (!alreadyId) {
                developers.push({
                    id,
                    avatar_url: avatarUrl,
                    myName,
                    company,
                    blog,
                    location,
                    email,
                    bio,
                    github_id: id,
                    linkedin_id: linkedinId,
                    codechef_id: codechefId,
                    hackerrank_id: hackerrankId,
                    twitter_id: twitterId,
                    medium_id: mediumId,
                    repos: reposList,
                });
        }
            res.status(201).send({
                id,
            });
        })
        .catch(() => {
            res.status(404).send({
                error: 'GitHub username is invalid',
            });
        });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    if (developers.some((x) => x.id === id)) {
        const requiredId = developers.findIndex((a) => a.id === id);
        res.status(200).send(developers[requiredId]);
    } else {
        res.status(404).send({
            error: 'User does not exist',
        });
    }
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    developers.splice(
        developers.findIndex((a) => a.id === id),
        1,
    );
    res.status(204).send();
});

module.exports = router;

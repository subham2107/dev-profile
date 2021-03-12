/* eslint-disable no-plusplus */
const express = require('express');

const axios = require('axios');

const router = express.Router();

const developers = [];

router.get('/', (req, res) => {
    const dev = [];
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
    let name;
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
    const promiseRepos = axios(`https://api.github.com/users/${githubId}/repos`);
    Promise.all([promiseUser, promiseRepos])
        .then((responses) => {
            Object.keys(responses[0].data).forEach((key) => {
                req.body[key] = responses[0].data[key];
                id = req.body.login;
                avatarUrl = req.body.avatar_url;
                name = req.body.name;
                company = req.body.company;
                blog = req.body.blog;
                location = req.body.location;
                email = req.body.email;
                bio = req.body.bio;
            });

            for (let i = 0; i < responses[1].data.length; i++) {
                name = responses[1].data[i].name;
                htmlUrl = responses[1].data[i].html_url;
                description = responses[1].data[i].description;
                updatedAt = responses[1].data[i].updated_at;
                repos = {
                    name,
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
                    name,
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

/* eslint-disable no-plusplus */
const express = require('express');

const axios = require('axios');

const router = express.Router();

const developers = [];

function countId(arr) {
    let occurs = 0;
    for (let i = 0; i < arr.length; i++) {
        if ('avatar_url' in arr[i]) occurs++;
    }
    return occurs;
}

router.get('/', (req, res) => {
    const dev = [];
    for (let i = 0; i < developers.length; i++) {
        const { id } = developers[i];
        const avatarUrl = developers[i].avatar_url;
        const result = { id, avatar_url: avatarUrl };
        if (id !== ' ' && avatarUrl !== ' ') dev.push(result);
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
    axios(`https://api.github.com/users/${githubId}`)
        .then((response) => {
            Object.keys(response.data).forEach((key) => {
                req.body[key] = response.data[key];
                id = req.body.login;
                avatarUrl = req.body.avatar_url;
                name = req.body.name;
                company = req.body.company;
                blog = req.body.blog;
                location = req.body.location;
                email = req.body.email;
                bio = req.body.bio;
            });
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
            });
            res.statusMessage = 'User Created';
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
    let name;
    let htmlUrl;
    let description;
    let updatedAt;
    let repos = {};
    const reposList = [];
    if (developers.some((x) => x.id === id)) {
        axios(`https://api.github.com/users/${id}/repos`).then((response) => {
            for (let i = 0; i < response.data.length; i++) {
                name = response.data[i].name;
                htmlUrl = response.data[i].html_url;
                description = response.data[i].description;
                updatedAt = response.data[i].updated_at;
                repos = {
                    name,
                    html_url: htmlUrl,
                    description,
                    updated_at: updatedAt,
                };
                reposList.push(repos);
            }

            for (let i = 0; i < 2 * countId(developers); i++) {
                if (developers[i].id === id) {
                    developers.splice(i + 1, 0, { repos: reposList });
                    const obj1 = developers[i];
                    const obj2 = developers[i + 1];
                    const results = { ...obj1, ...obj2 };
                    developers[i] = results;
                    res.statusMessage = 'Valid User';
                    res.status(200).send(developers[i]);
                    break;
                }
            }
        });
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
    res.statusMessage = 'Deleted';
    res.status(204).send();
});

module.exports = router;

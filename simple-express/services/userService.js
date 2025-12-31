import {
  asyncSaveUser, asyncFindUsers, asyncFindUserById,
  asyncDeleteUserById, asyncUpdateUserById,
} from '../repositories/userRepository.js';

export function createUser(userReq, res) {
  asyncSaveUser(userReq).then(() => {
    res.status(201).send('User has been created successfully');
  }).catch(err => {
    console.error('Failed to create user: ', err);
    res.status(500).send(`Failed to create user due to ${err.message}`);
  },
  );
}

export function findUsers(res) {
  asyncFindUsers().then(users => {
    res.status(200).json(users);
  }).catch(err => {
    console.error('Failed to find users', err);
    res.status(500).send(`Failed to find users due to ${err.message}`);
  });
}

export function findUserById(id, res) {
  asyncFindUserById(id).then(user => {
    if (!user) {
      // user is null
      res.status(404).send(`Not found user with id ${id}`);
    } else {
      res.status(200).json(user);
    }
  }).catch(err => {
    console.error('Failed to find users', err);
    res.status(500).send(`Failed to find users due to ${err.message}`);
  });
}

export function deleteUserById(id, res) {
  asyncDeleteUserById(id).then(() => {
    res.status(200).send('user deleted');
  }).catch(err => {
    if (err.code === 'P2025') {
      console.log('Nothing to delete; user was already gone.');
      res.status(200).send('user deleted');
    } else {
      console.error('Failed to delete user', err);
      res.status(500).send(`Failed to delete user due to ${err.message}`);
    }
  });
}

export function updateUserById(id, data, res) {
  asyncUpdateUserById(id, data).then(user => {
    res.status(200).json(user);
  }).catch(err => {
    res.status(500).send(`Failed to update user due to ${err.message}`);
  });
}
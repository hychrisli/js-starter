import {
  asyncSaveUser, asyncFindUsers, asyncFindUserById,
  asyncDeleteUserById, asyncUpdateUserById, asyncUserCount,
} from '../repositories/userRepository.js';

export async function createUser(userReq) {
  return asyncSaveUser(userReq);
}

export async function findUsersWithPagination(query, res) {
  const total = await asyncUserCount();
  const users = await asyncFindUsers(query.page, query.limit);
  res.status(200).json({
    totalUsers: total,
    totalPages: Math.trunc(total / query.limit) + 1,
    currentPage: query.page,
    users: users,
  });
}

// if not await, then Promise shall be returned
// and waited at the caller level. Otherwise unhandled exception
// can cause sever shut down
export async function findUserById(id, res) {
  return asyncFindUserById(id).then(user => {
    if (!user) {
      // user is null
      res.status(404).send(`Not found user with id ${id}`);
    } else {
      res.status(200).json(user);
    }
  });
}

export async function deleteUserById(id, res) {
  await asyncDeleteUserById(id);
  res.status(200).send('user deleted');
}

export async function updateUserById(id, data, res) {
  const user = await asyncUpdateUserById(id, data);
  res.status(200).json(user);
}
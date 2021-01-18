/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import invariant from 'shared/invariant';
/*
  将不能为空或未定义的项累加到第一个项中。这
  用于通过避免数组分配来节省内存，因此牺牲
  API清洁。因为“current”在传入之前可以为空，也可以不为空
  null在这个函数之后，确保将它分配回“current”
*/
/**
 * Accumulates items that must not be null or undefined into the first one. This
 * is used to conserve memory by avoiding array allocations, and thus sacrifices
 * API cleanness. Since `current` can be null before being passed in and not
 * null after this function, make sure to assign it back to `current`:
 *
 * `a = accumulateInto(a, b);`
 *
 * This API should be sparingly used. Try `accumulate` for something cleaner.
 *
 * @return {*|array<*>} An accumulation of items.
 */
// 累加进数组里
function accumulateInto<T>(
  current: ?(Array<T> | T),
  next: T | Array<T>,
): T | Array<T> {
  invariant(
    next != null,
    'accumulateInto(...): Accumulated items must not be null or undefined.',
  );

  if (current == null) {
    return next;
  }

  /*
    1. current是数组 next也是数组 把next的元素合并进current
    2. current是数组 next不是数组 把next元素push进current
    3. current不是数组 next是数组 把current放进数组然后和next合并
    4. current不是数组  next也不是，把current和next作为数组元素赋值给current所在空间
  */     
  // Both are not empty. Warning: Never call x.concat(y) when you are not
  // certain that x is an Array (x could be a string with concat method).
  if (Array.isArray(current)) {
    if (Array.isArray(next)) {
      current.push.apply(current, next);
      return current;
    }
    current.push(next);
    return current;
  }

  if (Array.isArray(next)) {
    // A bit too dangerous to mutate `next`.
    return [current].concat(next);
  }

  return [current, next];
}

export default accumulateInto;

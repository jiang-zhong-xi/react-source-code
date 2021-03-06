/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

export type TypeOfMode = number;
// 0b代表二进制
export const NoContext = 0b000;
// 并发模式 ConcurrentMode表示异步
export const ConcurrentMode = 0b001;
// 严格模式
export const StrictMode = 0b010;
// 概要模式
export const ProfileMode = 0b100;

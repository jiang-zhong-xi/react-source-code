/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

export type HookEffectTag = number;

export const NoEffect = /*     0        */ 0b00000000;
export const UnmountSnapshot = /*   2   */ 0b00000010;
export const UnmountMutation = /*   4   */ 0b00000100;
export const MountMutation = /*      8  */ 0b00001000;
export const UnmountLayout = /*      16  */ 0b00010000;
export const MountLayout = /*        32  */ 0b00100000;
export const MountPassive = /*    64     */ 0b01000000;
export const UnmountPassive = /*  128     */ 0b10000000;

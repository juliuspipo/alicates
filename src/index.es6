import * as functional from './modules/functional';
export const always = functional.always;
export const apply = functional.apply;
export const compose = functional.compose;
export const curry = functional.curry;
export const f = functional.f;
export const lift = functional.lift;
export const once = functional.once;
export const sequence = functional.sequence;
export const t = functional.t;

import * as logic from './modules/logic';
export const cond = logic.cond;
export const equals = logic.equals;
export const not = logic.not;
export const or = logic.or;
export const same = logic.same;

import * as list from './modules/list';
export const all = list.all;
export const any = list.any;
export const concat = list.concat;
export const contains = list.contains;
export const difference = list.difference;
export const filter = list.filter;
export const head = list.head;
export const init = list.init;
export const intersection = list.intersection;
export const last = list.last;
export const map = list.map;
export const none = list.none;
export const reduce = list.reduce;
export const reduceRight = list.reduceRight;
export const reverse = list.reverse;
export const tail = list.tail;
export const unique = list.unique;
export const without = list.without;
export const zip = list.zip;

import * as math from './modules/math';
export const add = math.add;
export const addAll = math.addAll;

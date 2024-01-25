import {
	calculatePercent,
	extractPoints,
	getColorForGrade,
	getRelativeTime,
	removeClassID
} from '$lib';
import { expect, test } from 'bun:test';

test('grade color', () => {
	expect(getColorForGrade(110)).toBe('blue');
	expect(getColorForGrade(100)).toBe('green');
	expect(getColorForGrade(90)).toBe('green');
	expect(getColorForGrade(80)).toBe('yellow');
	expect(getColorForGrade(70)).toBe('red');
	expect(getColorForGrade(0)).toBe('red');
	expect(getColorForGrade(-10)).toBe('red');
	expect(getColorForGrade('A')).toBe('green');
	expect(getColorForGrade('A-')).toBe('green');
	expect(getColorForGrade('A+')).toBe('green');
	expect(getColorForGrade('B')).toBe('yellow');
	expect(getColorForGrade('B-')).toBe('yellow');
	expect(getColorForGrade('B+')).toBe('yellow');
	['C', 'C-', 'C+', 'D', 'D-', 'D+', 'F', 'F-', 'F+'].forEach((grade) => {
		expect(getColorForGrade(grade)).toBe('red');
	});
	expect(getColorForGrade('N/A')).toBe('gray');
    expect(getColorForGrade('E')).toBe('gray');
});

test('class name filtering', () => {
	expect(removeClassID('Chemistry (P) (737660)')).toBe('Chemistry');
});

test('extract points', () => {
	expect(extractPoints('5 / 10')).toEqual([5, 10]);
	expect(extractPoints('10 Points Possible')).toEqual([NaN, 10]);
});

test('calculate percent', () => {
	expect(calculatePercent('5 / 10')).toBe(50);
	expect(calculatePercent('10 Points Possible')).toBe(0);
});

test('get relative time', () => {
	expect(getRelativeTime(new Date())).toBe('now');
	expect(getRelativeTime(new Date(Date.now() - 1000))).toBe('1 second ago');
	expect(getRelativeTime(new Date(Date.now() - 1000 * 60))).toBe('1 minute ago');
	expect(getRelativeTime(new Date(Date.now() - 1000 * 60 * 60))).toBe('1 hour ago');
	expect(getRelativeTime(new Date(Date.now() - 1000 * 60 * 60 * 24))).toBe('yesterday');
	expect(getRelativeTime(new Date(Date.now() - 1000 * 60 * 60 * 24 * 2))).toBe('2 days ago');
	expect(getRelativeTime(new Date(Date.now() - 1000 * 60 * 60 * 24 * 30))).toBe('last month');
	expect(getRelativeTime(new Date(Date.now() - 1000 * 60 * 60 * 24 * 30 * 2))).toBe('2 months ago');
	expect(getRelativeTime(new Date(Date.now() - 1000 * 60 * 60 * 24 * 365))).toBe('last year');
	expect(getRelativeTime(new Date(Date.now() - 1000 * 60 * 60 * 24 * 365 * 2))).toBe('2 years ago');
});

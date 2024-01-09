import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

import type { StudentAccount } from '$lib/synergy';
import type { Gradebook } from '$lib/Gradebook';
import type { Attendance } from '$lib/Attendance';
import type { StudentInfo } from '$lib/StudentInfo';
import type { ReportCardListEntity } from '$lib/ReportCardListEntity';

export const studentAccount: Writable<StudentAccount | undefined> = writable();

export const gradebook: Writable<Gradebook | undefined> = writable();

export const gradebookLoaded = writable(false);

export const hypotheticalGradebook: Writable<{
	[id: string]: {
		pointsEarned: string;
		pointsPossible: string;
		notForGrade: boolean;
		category?: string;
		name?: string;
	};
}> = writable({});

export const attendance: Writable<Attendance | undefined> = writable();

export const attendanceLoaded = writable(false);

export const studentInfo: Writable<StudentInfo | undefined> = writable();

export const studentInfoLoaded = writable(false);

export const reportCardList: Writable<ReportCardListEntity[] | undefined> = writable();

export const reportCardListLoaded = writable(false);
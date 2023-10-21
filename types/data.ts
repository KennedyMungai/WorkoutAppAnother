export type Difficulty = 'easy' | 'normal' | 'hard'
export type WorkOutType = 'exercise' | 'stretch' | 'break'

export interface WorkOutSequence {
	slug: string
	name: string
	duration: number
	type: WorkOutType
	reps?: number
}

export interface WorkOut {
	slug: string
	name: string
	duration: number
	difficulty: Difficulty
	sequence: WorkOutSequence[]
}

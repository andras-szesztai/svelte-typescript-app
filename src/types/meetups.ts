export interface IMeetup {
    id: string
    title: string
    subtitle: string
    description: string
    imageUrl: string
    address: string
    contactEmail: string
    isFavorite: boolean
}

export type IMeetupNoID = Omit<IMeetup, 'id'>

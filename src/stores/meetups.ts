import { writable } from 'svelte/store'

import type { IMeetup } from '../types/meetups'

const initialMeetups: IMeetup[] = [
    {
        id: 'm1',
        title: 'Coding Bootcamp',
        subtitle: 'Learn to code in 2 hours',
        description:
            'In this meetup, we will have some experts that teach you how to code!',
        imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Caffe_Nero_coffee_bar%2C_High_St%2C_Sutton%2C_Surrey%2C_Greater_London.JPG/800px-Caffe_Nero_coffee_bar%2C_High_St%2C_Sutton%2C_Surrey%2C_Greater_London.JPG',
        address: '27th Nerd Road, 32523 New York',
        contactEmail: 'code@test.com',
        isFavorite: false,
    },
    {
        id: 'm2',
        title: 'Swim Together',
        subtitle: "Let's go for some swimming",
        description: 'We will simply swim some rounds!',
        imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Olympic_swimming_pool_%28Tbilisi%29.jpg/800px-Olympic_swimming_pool_%28Tbilisi%29.jpg',
        address: '27th Nerd Road, 32523 New York',
        contactEmail: 'swim@test.com',
        isFavorite: false,
    },
]

const meetups = writable(initialMeetups)

export const customMeetupsStore = {
    subscribe: meetups.subscribe,
    addMeetup: (meetup: Omit<IMeetup, 'id'>) => {
        const newMeetup = { id: Math.random().toString(), ...meetup }
        meetups.update((items) => [newMeetup, ...items])
    },
    toggleFavorite: (id: string) => {
        meetups.update((items) => {
            const newMeetups = [...items]
            const updatedMeetup = newMeetups.find((m) => m.id === id)
            const meetupIndex = newMeetups.findIndex((m) => m.id === id)
            if (updatedMeetup) {
                newMeetups[meetupIndex] = {
                    ...updatedMeetup,
                    isFavorite: !updatedMeetup.isFavorite,
                }
            }
            return newMeetups
        })
    },
}

export default customMeetupsStore

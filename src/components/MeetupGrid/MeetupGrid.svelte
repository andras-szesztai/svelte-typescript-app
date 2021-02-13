<script lang="ts">
    import { createEventDispatcher } from 'svelte'
    import { scale } from 'svelte/transition'
    import { flip } from 'svelte/animate'

    import MeetupItem from '../MeetupItem/MeetupItem.svelte'
    import Button from '../Button/Button.svelte'
    import MeetupFilter from '../MeetupFilter/MeetupFilter.svelte'

    import type { IMeetup } from '../../types/meetups'

    export let meetups: IMeetup[]

    const dispatch = createEventDispatcher()

    let favsOnly = false
    $: filteredMeetups = favsOnly
        ? meetups.filter((m) => m.isFavorite)
        : meetups

    function setFilter(event: CustomEvent<number>) {
        favsOnly = !!event.detail
    }
</script>

<section id="meetup-controls">
    <MeetupFilter on:select={setFilter} />
    <Button on:click={() => dispatch('add')}>New Meetup</Button>
</section>
<section id="meetups">
    {#each filteredMeetups as meetup (meetup.id)}
        <div transition:scale animate:flip={{ duration: 300 }}>
            <MeetupItem {meetup} on:togglefavorite on:showDetails on:edit />
        </div>
    {/each}
</section>

<style>
    #meetup-controls {
        margin: 1rem;
        display: flex;
        justify-content: space-between;
    }
    #meetups {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 1rem;
    }

    @media (min-width: 768px) {
        #meetups {
            grid-template-columns: repeat(2, 1fr);
        }
    }
</style>

<script lang="ts">
    import MeetupItem from '../MeetupItem/MeetupItem.svelte'
    import Button from '../Button/Button.svelte'
    import MeetupFilter from '../MeetupFilter/MeetupFilter.svelte'

    import type { IMeetup } from '../../types/meetups'

    export let meetups: IMeetup[]

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
</section>
<section id="meetups">
    {#each filteredMeetups as meetup}
        <MeetupItem {meetup} on:togglefavorite on:showDetails on:edit />
    {/each}
</section>

<style>
    #meetup-controls {
        margin: 1rem;
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

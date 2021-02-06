<script lang="ts">
    import MeetupItem from '../MeetupItem/MeetupItem.svelte'

    import type { IMeetup } from '../../types/meetups'

    export let meetups: IMeetup[]
</script>

<section>
    {#each meetups as meetup}
        <MeetupItem {meetup} on:togglefavorite />
    {/each}
</section>

<style>
    section {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 1rem;
    }

    @media (min-width: 768px) {
        section {
            grid-template-columns: repeat(2, 1fr);
        }
    }
</style>

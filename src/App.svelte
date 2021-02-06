<script lang="ts">
    import Header from './components/Header/Header.svelte'
    import MeetupItem from './components/MeetupItem/MeetupItem.svelte'

    import { meetups } from './data/meetups'
</script>

<Header />

<section id="meetups">
    {#each meetups as meetup}
        <MeetupItem {meetup} />
    {/each}
</section>

<style>
    #meetups {
        margin-top: 5rem;
    }
</style>

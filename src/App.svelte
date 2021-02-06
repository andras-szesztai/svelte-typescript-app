<script lang="ts">
    import Header from './components/Header/Header.svelte'
    import MeetupGrid from './components/MeetupGrid/MeetupGrid.svelte'

    import { meetups } from './data/meetups'
</script>

<Header />
<main id="meetups">
    <MeetupGrid {meetups} />
</main>

<style>
    #meetups {
        margin-top: 5rem;
    }
</style>

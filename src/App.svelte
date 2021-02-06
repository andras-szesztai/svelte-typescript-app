<script lang="ts">
    import Header from './components/Header/Header.svelte'
    import MeetupGrid from './components/MeetupGrid/MeetupGrid.svelte'
    import EditMeetup from './components/EditMeetup/EditMeetup.svelte'
    import Button from './components/Button/Button.svelte'

    import { initialMeetups as dataMeetups } from './data/meetups'

    let meetups = dataMeetups
    let editMode = false

    function toggleFavorite(event: CustomEvent) {
        const clickedId = event.detail.id
        const newMeetups = [...meetups]
        const updatedMeetup = newMeetups.find((m) => m.id === clickedId)
        const meetupIndex = newMeetups.findIndex((m) => m.id === clickedId)
        if (updatedMeetup) {
            newMeetups[meetupIndex] = {
                ...updatedMeetup,
                isFavorite: !updatedMeetup.isFavorite,
            }
        }
        meetups = newMeetups
    }
</script>

<Header />
<main>
    <Button caption="New Meetup" on:click={() => (editMode = true)} />
    {#if editMode}
        <EditMeetup />
    {/if}

    <MeetupGrid {meetups} on:togglefavorite={toggleFavorite} />
</main>

<style>
    main {
        margin-top: 5rem;
    }
</style>

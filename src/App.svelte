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

    function addMeetup(event: CustomEvent) {
        meetups = [event.detail, ...meetups]
        editMode = false
    }

    function cancelEdit() {
        editMode = false
    }
</script>

<Header />
<main>
    <div class="meetup-controls">
        <Button on:click={() => (editMode = !editMode)}>New Meetup</Button>
    </div>
    {#if editMode}
        <EditMeetup on:save={addMeetup} on:cancel={cancelEdit} />
    {/if}
    <MeetupGrid {meetups} on:togglefavorite={toggleFavorite} />
</main>

<style>
    main {
        margin-top: 5rem;
    }

    .meetup-controls {
        margin: 1rem;
    }
</style>

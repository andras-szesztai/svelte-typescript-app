<script lang="ts">
    import Header from './components/Header/Header.svelte'
    import MeetupGrid from './components/MeetupGrid/MeetupGrid.svelte'
    import EditMeetup from './components/EditMeetup/EditMeetup.svelte'
    import Button from './components/Button/Button.svelte'

    import meetups from './stores/meetups'

    import type { IMeetup } from './types/meetups'

    let editMode = false

    function toggleFavorite(event: CustomEvent<{ id: string }>) {
        meetups.toggleFavorite(event.detail.id)
    }

    function addMeetup(event: CustomEvent<Omit<IMeetup, 'id'>>) {
        meetups.addMeetup(event.detail)
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
    <MeetupGrid meetups={$meetups} on:togglefavorite={toggleFavorite} />
</main>

<style>
    main {
        margin-top: 5rem;
    }

    .meetup-controls {
        margin: 1rem;
    }
</style>

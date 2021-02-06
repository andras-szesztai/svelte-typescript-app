<script lang="ts">
    import Header from './components/Header/Header.svelte'
    import MeetupGrid from './components/MeetupGrid/MeetupGrid.svelte'
    import EditMeetup from './components/EditMeetup/EditMeetup.svelte'
    import Button from './components/Button/Button.svelte'

    import meetups from './stores/meetups'

    let editMode = false

    function addMeetup() {
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
    <MeetupGrid meetups={$meetups} />
</main>

<style>
    main {
        margin-top: 5rem;
    }

    .meetup-controls {
        margin: 1rem;
    }
</style>

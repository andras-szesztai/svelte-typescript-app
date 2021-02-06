<script lang="ts">
    import Header from './components/Header/Header.svelte'
    import MeetupGrid from './components/MeetupGrid/MeetupGrid.svelte'
    import EditMeetup from './components/EditMeetup/EditMeetup.svelte'
    import Button from './components/Button/Button.svelte'

    import meetups from './stores/meetups'
    import MeetupDetail from './components/MeetupDetail/MeetupDetail.svelte'

    let editMode = false
    let page: 'overview' | 'details' = 'overview'
    let selectedId: string | null = null

    function addMeetup() {
        editMode = false
    }

    function cancelEdit() {
        editMode = false
    }

    function showDetails(e: CustomEvent<{ id: string }>) {
        page = 'details'
        selectedId = e.detail.id
    }

    function closeDetails() {
        page = 'overview'
        selectedId = null
    }
</script>

<Header />
<main>
    {#if page === 'overview'}
        <div class="meetup-controls">
            <Button on:click={() => (editMode = !editMode)}>New Meetup</Button>
        </div>
        {#if editMode}
            <EditMeetup on:save={addMeetup} on:cancel={cancelEdit} />
        {/if}
        <MeetupGrid meetups={$meetups} on:showDetails={showDetails} />
    {:else if page === 'details' && selectedId}
        <MeetupDetail id={selectedId} on:close={closeDetails} />
    {/if}
</main>

<style>
    main {
        margin-top: 5rem;
    }

    .meetup-controls {
        margin: 1rem;
    }
</style>

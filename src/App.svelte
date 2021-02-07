<script lang="ts">
    import Header from './components/Header/Header.svelte'
    import MeetupGrid from './components/MeetupGrid/MeetupGrid.svelte'
    import EditMeetup from './components/EditMeetup/EditMeetup.svelte'

    import meetups from './stores/meetups'
    import MeetupDetail from './components/MeetupDetail/MeetupDetail.svelte'

    let editMode = false
    let page: 'overview' | 'details' = 'overview'
    let selectedId: string | null = null
    let editedId: string | null = null

    function saveMeetup() {
        editMode = false
        editedId = null
    }

    function cancelEdit() {
        editMode = false
        editedId = null
    }

    function showDetails(e: CustomEvent<{ id: string }>) {
        page = 'details'
        selectedId = e.detail.id
    }

    function closeDetails() {
        page = 'overview'
        selectedId = null
    }
    function startEdit(event: CustomEvent<{ id: string }>) {
        editMode = true
        editedId = event.detail.id
    }
</script>

<Header />
<main>
    {#if page === 'overview'}
        {#if editMode}
            <EditMeetup
                id={editedId}
                on:save={saveMeetup}
                on:cancel={cancelEdit}
            />
        {/if}
        <MeetupGrid
            meetups={$meetups}
            on:showDetails={showDetails}
            on:edit={startEdit}
            on:add={() => (editMode = true)}
        />
    {:else if page === 'details' && selectedId}
        <MeetupDetail id={selectedId} on:close={closeDetails} />
    {/if}
</main>

<style>
    main {
        margin-top: 5rem;
    }
</style>

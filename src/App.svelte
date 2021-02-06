<script lang="ts">
    import Header from './components/Header/Header.svelte'
    import MeetupGrid from './components/MeetupGrid/MeetupGrid.svelte'

    import { initialMeetups as dataMeetups } from './data/meetups'

    let meetups = dataMeetups

    let title = ''
    let subtitle = ''
    let description = ''
    let imageUrl = ''
    let address = ''
    let contactEmail = ''

    function addMeetup() {
        const newMeetup = {
            id: Math.random().toString(),
            title,
            subtitle,
            description,
            imageUrl,
            address,
            contactEmail,
        }
        meetups = [...meetups, newMeetup]
    }
</script>

<Header />
<main id="meetups">
    <form on:submit|preventDefault={addMeetup}>
        <div class="form-control">
            <label for="title">Title</label>
            <input type="text" id="title" bind:value={title} />
        </div>
        <div class="form-control">
            <label for="subtitle">Subtitle</label>
            <input type="text" id="subtitle" bind:value={subtitle} />
        </div>
        <div class="form-control">
            <label for="address">Address</label>
            <input type="text" id="address" bind:value={address} />
        </div>
        <div class="form-control">
            <label for="imageUrl">Image URL</label>
            <input type="text" id="imageUrl" bind:value={imageUrl} />
        </div>
        <div class="form-control">
            <label for="email">E-Mail</label>
            <input type="text" id="email" bind:value={contactEmail} />
        </div>
        <div class="form-control">
            <label for="description">Description</label>
            <textarea rows="3" id="description" bind:value={description} />
        </div>
        <button type="submit">Save</button>
    </form>
    <MeetupGrid {meetups} />
</main>

<style>
    #meetups {
        margin-top: 5rem;
    }
</style>

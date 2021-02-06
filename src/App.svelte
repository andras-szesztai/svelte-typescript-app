<script lang="ts">
    import Header from './components/Header/Header.svelte'
    import MeetupGrid from './components/MeetupGrid/MeetupGrid.svelte'
    import TextInput from './components/TextInput/TextInput.svelte'

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
        meetups = [newMeetup, ...meetups]
    }

    const getInputValue = (e: Event) => (e.target as HTMLInputElement).value
</script>

<Header />
<main>
    <form on:submit|preventDefault={addMeetup}>
        <TextInput
            id="title"
            label="Title"
            value={title}
            on:input={(e) => (title = getInputValue(e))}
        />
        <TextInput
            id="subtitle"
            label="Subtitle"
            value={subtitle}
            on:input={(e) => (subtitle = getInputValue(e))}
        />
        <TextInput
            id="address"
            label="Address"
            value={address}
            on:input={(e) => (address = getInputValue(e))}
        />
        <TextInput
            id="imageUrl"
            label="Image URL"
            value={imageUrl}
            on:input={(e) => (imageUrl = getInputValue(e))}
        />
        <TextInput
            id="contactEmail"
            label="Email"
            value={contactEmail}
            inputType="email"
            on:input={(e) => (contactEmail = getInputValue(e))}
        />
        <TextInput
            id="description"
            label="Description"
            value={description}
            controlType="textarea"
            on:input={(e) => (description = getInputValue(e))}
        />
        <button type="submit">Save</button>
    </form>
    <MeetupGrid {meetups} />
</main>

<style>
    main {
        margin-top: 5rem;
    }

    form {
        width: 30rem;
        max-width: 90%;
        margin: auto;
    }
</style>

<script lang="ts">
    import { createEventDispatcher } from 'svelte'

    import TextInput from '../TextInput/TextInput.svelte'
    import Button from '../Button/Button.svelte'

    const dispatch = createEventDispatcher()

    let title = ''
    let subtitle = ''
    let description = ''
    let imageUrl = ''
    let address = ''
    let contactEmail = ''

    const getInputValue = (e: Event) => (e.target as HTMLInputElement).value

    function submitForm() {
        dispatch('save', {
            id: Math.random().toString(),
            title,
            subtitle,
            description,
            imageUrl,
            address,
            contactEmail,
            isFavorite: false,
        })
    }
</script>

<form on:submit|preventDefault={submitForm}>
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
    <Button type="submit">Save</Button>
</form>

<style>
    form {
        width: 30rem;
        max-width: 90%;
        margin: auto;
    }
</style>

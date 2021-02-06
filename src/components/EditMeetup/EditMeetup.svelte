<script lang="ts">
    import { createEventDispatcher } from 'svelte'

    import TextInput from '../TextInput/TextInput.svelte'
    import Button from '../Button/Button.svelte'
    import Modal from '../Modal/Modal.svelte'

    import { isEmpty } from '../../utils/validation'

    const dispatch = createEventDispatcher()

    let title = ''
    let titleValid = false
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

    function cancel() {
        dispatch('cancel')
    }

    $: titleValid = !isEmpty(title)
</script>

<Modal title="Add or Edit Meetup" on:cancel>
    <form on:submit|preventDefault={submitForm}>
        <TextInput
            id="title"
            label="Title"
            value={title}
            valid={titleValid}
            validityMessage="Please enter a valid title."
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
    </form>
    <div slot="footer">
        <Button type="button" mode="outline" on:click={cancel}>Cancel</Button>
        <Button type="button" on:click={submitForm}>Save</Button>
    </div>
</Modal>

<style>
    form {
        width: 95%;
        max-width: 90%;
        margin: auto;
    }
</style>

<script lang="ts">
    import { createEventDispatcher } from 'svelte'

    import TextInput from '../TextInput/TextInput.svelte'
    import Button from '../Button/Button.svelte'
    import Modal from '../Modal/Modal.svelte'

    import { isEmpty, isValidEmail } from '../../utils/validation'

    import type { IMeetup } from '../../types/meetups'

    const dispatch = createEventDispatcher<{
        save: Omit<IMeetup, 'id'>
        cancel: undefined
    }>()

    let title = ''
    let subtitle = ''
    let description = ''
    let imageUrl = ''
    let address = ''
    let contactEmail = ''

    const getInputValue = (e: Event) => (e.target as HTMLInputElement).value

    function submitForm() {
        dispatch('save', {
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
    $: subtitleValid = !isEmpty(subtitle)
    $: descriptionValid = !isEmpty(description)
    $: imageUrlValid = !isEmpty(imageUrl)
    $: addressValid = !isEmpty(address)
    $: contactEmailValid = !isValidEmail(contactEmail) && !isEmpty(contactEmail)
    $: formIsValid =
        titleValid &&
        subtitleValid &&
        descriptionValid &&
        imageUrlValid &&
        addressValid &&
        contactEmailValid
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
            valid={subtitleValid}
            validityMessage="Please enter a valid subtitle."
            on:input={(e) => (subtitle = getInputValue(e))}
        />
        <TextInput
            id="address"
            label="Address"
            value={address}
            valid={addressValid}
            validityMessage="Please enter a valid address."
            on:input={(e) => (address = getInputValue(e))}
        />
        <TextInput
            id="imageUrl"
            label="Image URL"
            value={imageUrl}
            valid={imageUrlValid}
            validityMessage="Please enter a valid image url."
            on:input={(e) => (imageUrl = getInputValue(e))}
        />
        <TextInput
            id="contactEmail"
            label="Email"
            value={contactEmail}
            valid={contactEmailValid}
            inputType="email"
            validityMessage="Please enter a valid email."
            on:input={(e) => (contactEmail = getInputValue(e))}
        />
        <TextInput
            id="description"
            label="Description"
            value={description}
            valid={descriptionValid}
            controlType="textarea"
            validityMessage="Please enter a valid description."
            on:input={(e) => (description = getInputValue(e))}
        />
    </form>
    <div slot="footer">
        <Button type="button" mode="outline" on:click={cancel}>Cancel</Button>
        <Button type="button" on:click={submitForm} disabled={!formIsValid}
            >Save</Button
        >
    </div>
</Modal>

<style>
    form {
        width: 95%;
        max-width: 90%;
        margin: auto;
    }
</style>

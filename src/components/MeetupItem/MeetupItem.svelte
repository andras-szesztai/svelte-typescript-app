<script lang="ts">
    import { createEventDispatcher } from 'svelte'
    import Button from '../Button/Button.svelte'
    import Badge from '../Badge/Badge.svelte'

    import meetupsStore from '../../stores/meetups'

    import type { IMeetup } from '../../types/meetups'

    const dispatch = createEventDispatcher<{
        showDetails: { id: string }
        edit: { id: string }
    }>()

    export let meetup: IMeetup

    function toggleFavorite(id: string) {
        meetupsStore.toggleFavorite(id)
    }
</script>

<article>
    <header>
        <h1>
            {meetup.title}
            {#if meetup.isFavorite}
                <Badge>FAVORITE</Badge>
            {/if}
        </h1>
        <h2>{meetup.subtitle}</h2>
        <p>{meetup.address}</p>
    </header>
    <div class="image">
        <img src={meetup.imageUrl} alt={meetup.title} />
    </div>
    <div class="content">
        <p>{meetup.description}</p>
    </div>
    <footer>
        <Button
            mode="outline"
            on:click={() => dispatch('edit', { id: meetup.id })}>Edit</Button
        >
        <Button
            mode="outline"
            color={meetup.isFavorite && 'success'}
            on:click={() => toggleFavorite(meetup.id)}
            >{!meetup.isFavorite ? 'Favorite' : 'Unfavorite'}</Button
        >
        <Button on:click={() => dispatch('showDetails', { id: meetup.id })}
            >Show Details</Button
        >
    </footer>
</article>

<style>
    article {
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        border-radius: 5px;
        background: white;
        margin: 1rem;
    }

    header,
    .content,
    footer {
        padding: 1rem;
    }

    .image {
        width: 100%;
        height: 14rem;
    }

    .image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    h1 {
        font-size: 1.25rem;
        margin: 0.5rem 0;
        font-family: 'Roboto Slab', sans-serif;
    }

    h2 {
        font-size: 1rem;
        color: #808080;
        margin: 0.5rem 0;
    }

    p {
        font-size: 1.25rem;
        margin: 0;
    }

    div {
        text-align: right;
    }

    .content {
        height: 4.5rem;
    }
</style>

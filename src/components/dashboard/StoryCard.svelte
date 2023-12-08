<script lang="ts">

    import type {IStory} from "../../interfaces/IStory";
    import Icon from "@iconify/svelte";
    import axios from "axios";
    import {array, number, object, string} from "yup";
    import {createForm} from "felte";
    import {validator} from "@felte/validator-yup";
    import Input from "./Input.svelte";

    export let stories: IStory[]
    export let story: IStory
    export let i: number

    function openDeleteModal() {
        console.log("ok");
        const modal = document.getElementById("modal-delete-story-" + story?._id);
        //@ts-ignore
        modal.showModal();
    }

    function openUpdateModal() {
        const modal = document.getElementById("modal-update-story-" + story?._id);
        //@ts-ignore
        modal.showModal();
    }

    function deleteStory() {
        axios.delete("http://localhost:3000/story/" + story?._id)
            .then(() => {
                stories = stories.filter(s => s._id !== story._id);
            })
    }


    const schema = object({
        page: string(),
        title: string(),
        description: string(),
        responses: array().of(
            object({
                title: string(),
                icon: string(),
                id: string(),
            })
        ),
        choice: number().required("Le choix est requis !"),
    });

    const {form, errors, data, addField, unsetField} = createForm({
        extend: [validator({schema})],
        initialValues: story,
        onSubmit: async (values: any) => {
            axios.put("http://localhost:3000/story/" + story?._id, values)
                .then((response) => {
                    stories = stories.map(s => {
                        if (s._id === story._id) {
                            return response.data.data;
                        }
                        return s;
                    })
                    //@ts-ignore
                    document.getElementById("modal-update-story-" + story?._id).close();
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    });


    $: responses = $data.responses

    function removeResponse(index: number) {
        return () => unsetField(`responses.${index}`);
    }

    function addResponse(index: number) {
        return () => addField(`responses`, {
            title: "",
            icon: "",
            id: "",
        }, index)
    }

</script>

<tr>
    <th>{i + 1}</th>
    <td>{story.page}</td>
    <td>{story.title}</td>
    <td>{story.description}</td>
    <td>{story.choice}</td>
    <td class="flex space-x-3">
        <button on:click={openUpdateModal} class="tooltip" data-tip="Modifier">
            <Icon class="w-6 h-6 hover:text-amber-500 transition cursor-pointer" icon="tabler:edit"/>
        </button>
        <button on:click={openDeleteModal} class="tooltip" data-tip="Supprimer">
            <Icon class="w-6 h-6 hover:text-red-600 transition cursor-pointer" icon="tabler:trash"/>
        </button>
    </td>
</tr>

<!-- Modal delete story -->
<dialog id="modal-delete-story-{story?._id}" class="modal">
    <div class="modal-box flex flex-col space-y-4 justify-center items-center">
        <h3 class="font-bold text-lg">Créer une nouvelle histoire</h3>
        <form method="dialog" class="flex flex-row justify-center items-center space-x-4">
            <!-- if there is a button in form, it will close the modal -->
            <button class="btn" on:click={deleteStory}>Confirmer</button>
            <button class="btn">Annuler</button>
        </form>
    </div>
</dialog>

<!-- Modal update story -->
<dialog id="modal-update-story-{story?._id}" class="modal">
    <div class="modal-box">
        <h3 class="font-bold text-lg">Mettre à jour l'histoire</h3>
        <form use:form class="flex flex-col space-y-6">
            <Input title="Page" placeholder="URL de la page" name="page" type="text" errors="{errors}"/>
            <Input title="Titre" placeholder="Titre de l'histoire" name="title" type="text" errors="{errors}"/>
            <Input title="Description" placeholder="Description de l'histoire" name="description" type="text"
                   errors="{errors}"/>
            <Input title="Choix" placeholder="Nombre de choix" name="choice" type="number" errors="{errors}"/>

            <!-- Boutons d'ajout et de suppression de réponses -->

            <!-- Réponses -->
            <button on:click|preventDefault="{addResponse(responses.length)}">Ajouter une réponse</button>
            {#each responses as response, index}
                <div class="flex flex-col space-y-6 border rounded-lg p-4 shadow-lg">
                    <Input title="Titre" placeholder="Titre de la réponse" name="responses[{index}].title" type="text"
                           errors="{errors}"/>
                    <Input title="Icon" placeholder="Icon de la réponse" name="responses[{index}].icon" type="text"
                           errors="{errors}"/>
                    <select name="responses[{index}].id" class="select select-sm w-full max-w-xs">
                        <option value="">Choisir un titre</option>
                        {#each stories as s}
                            {#if s?._id !== story?._id}
                                <option value={s?._id}>{s?.title}</option>
                            {/if}
                        {/each}
                    </select>
                    <button on:click|preventDefault="{removeResponse(index)}">Supprimer la réponse</button>
                </div>
            {/each}
            <button type="submit">Mettre à jour</button>
        </form>
    </div>
</dialog>

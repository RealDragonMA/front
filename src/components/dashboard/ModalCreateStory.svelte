 <script lang="ts">
    import Input from "./Input.svelte";
        import {array, number, object, string} from "yup";
        import {createForm} from "felte";
        import {validator} from "@felte/validator-yup";
        import axios from "axios";
        import type {IStory} from "../../interfaces/IStory";

    export let stories: IStory[]

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
        initialValues: {
            page: "",
            title: "",
            description: "",
            responses: [
                {
                    title: "",
                    icon: "",
                    id: "",
                },
            ],
            choice: 0,
        },
        onSubmit: async (values: any) => {
            axios.post("https://ndi.mathis-mazoyer.fr/story", values)
                .then((response) => {
                    stories = [...stories, response.data.data]
                    //@ts-ignore
                    document.getElementById("my_modal_1").close()
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

<dialog id="my_modal_1" class="modal">
    <div class="modal-box">
        <h3 class="font-bold text-lg">Créer une nouvelle histoire</h3>
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
                    <Input title="ID" placeholder="ID de la réponse" name="responses[{index}].id" type="text"
                           errors="{errors}"/>
                    <button on:click|preventDefault="{removeResponse(index)}">Supprimer la réponse</button>
                </div>
            {/each}
            <button type="submit">Créer l'histoire</button>
        </form>
    </div>
</dialog>

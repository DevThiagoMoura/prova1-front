const apiUrl = 'http://localhost:3000/items'; // URL da API

document.addEventListener('DOMContentLoaded', () => {
    // Referências para os elementos da página
    const itemForm = document.getElementById('item-form');
    const itemIdInput = document.getElementById('item-id');
    const itemNameInput = document.getElementById('item-name');
    const btnSave = document.getElementById('btn-save');
    const btnCancel = document.getElementById('btn-cancel');
    const itemList = document.getElementById('item-list');

    // Carrega os itens quando a página é aberta
    loadItems();

    // Adiciona ou atualiza o item ao enviar o formulário
    itemForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita o recarregamento da página

        const id = itemIdInput.value.trim();
        const name = itemNameInput.value.trim();

        if (!name) return;

        if (id) {
            // Se tem ID, atualiza
            updateItem(id, name);
        } else {
            // Senão, cria novo
            createItem(name);
        }
    });

    // Reseta o formulário quando o botão de cancelar é clicado
    // Aqui no seu código estava 'clique'
    btnCancel.addEventListener('click', resetForm);

    // ==========================
    // Função para carregar os itens (GET /items)
    // ==========================
    function loadItems() {
        fetch(apiUrl)
            .then(res => res.json()) // Converte a resposta para JSON
            .then(items => {
                itemList.innerHTML = ''; // Limpa a lista
                items.forEach(addItemToList); // Adiciona cada item à lista
            })
            .catch(console.error); // Exibe o erro no console
    }

    // ==========================
    // Cria o elemento visual do item e adiciona à lista
    // OBS: a API devolve { id, name }, não { Id, nome }
    // ==========================
    function addItemToList(item) {
        const li = document.createElement('li'); // Cria um novo elemento de lista
        li.innerHTML = `
            <span class="item-name">${item.name}</span>
            <div class="item-actions">
                <button class="btn-edit">Editar</button>
                <button class="btn-delete">Excluir</button>
            </div>
        `;

        // Eventos dos botões de editar e excluir
        li.querySelector('.btn-edit').addEventListener('click', () => editItem(item));
        li.querySelector('.btn-delete').addEventListener('click', () => deleteItem(item.id));

        itemList.appendChild(li); // Adiciona o item na lista
    }

    // ==========================
    // Cria um novo item (POST /items)
    // body: { name: "..." }
    // ==========================
    function createItem(name) {
        fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name }) // Envia o nome do novo item
        })
        .then(res => res.json()) // Converte a resposta para JSON (item criado)
        .then(item => {
            addItemToList(item); // Adiciona o item criado à lista
            resetForm();         // Limpa o formulário
        })
        .catch(console.error); // Exibe o erro no console
    }

    // ==========================
    // Preenche o formulário para edição
    // (E do CRUD – professor certamente queria isso ativo)
    // ==========================
    function editItem(item) {
        itemIdInput.value = item.id;      // Preenche o ID do item
        itemNameInput.value = item.name;  // Preenche o nome do item
        btnSave.textContent = 'Atualizar Item'; // Altera o texto do botão para "Atualizar"
        btnCancel.classList.remove('hidden');   // Mostra o botão de cancelar
    }

    // ==========================
    // Atualiza um item (PUT /items/:id)
    // ==========================
    function updateItem(id, name) {
        fetch(`${apiUrl}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name }) // Envia o nome atualizado
        })
        .then(res => {
            if (!res.ok) {
                throw new Error('Erro ao atualizar item');
            }
            resetForm(); // Reseta o formulário após a atualização
            loadItems(); // Recarrega a lista de itens
        })
        .catch(console.error); // Exibe o erro no console
    }

    // ==========================
    // Deleta um item (DELETE /items/:id)
    // ==========================
    function deleteItem(id) {
        if (confirm('Tem certeza que deseja excluir este item?')) { // Confirmação
            fetch(`${apiUrl}/${id}`, { method: 'DELETE' }) // Requisição DELETE
                .then(res => {
                    if (!res.ok) {
                        throw new Error('Erro ao excluir item');
                    }
                    loadItems(); // Recarrega a lista após a exclusão
                })
                .catch(console.error); // Exibe o erro no console
        }
    }

    // ==========================
    // Reseta o formulário
    // ==========================
    function resetForm() {
        itemIdInput.value = '';                 // Limpa o campo ID
        itemNameInput.value = '';               // Limpa o campo de nome
        btnSave.textContent = 'Adicionar Item'; // Volta o botão para "Adicionar"
        btnCancel.classList.add('hidden');      // Esconde o botão de cancelar
    }
});

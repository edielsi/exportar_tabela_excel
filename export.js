function exportar(id_tabela) {
    console.log(id_tabela)
    var nome_arquivo_exportacao = `${id_tabela}.xlsx`;
    var tabela_exportacao = document.getElementById(id_tabela);

    var planilha = XLSX.utils.table_to_book(tabela_exportacao);
    XLSX.writeFile(planilha, nome_arquivo_exportacao)

}

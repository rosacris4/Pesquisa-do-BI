$("#resultado").hide();
$('#botao').on("click", function () {
    console.log("entrei");
    var input = document.querySelector("#NBi");
    var valor = input.value;
    console.log(valor);
    const link = "https://ka6xhw.deta.dev/bi/" + valor;

    $.ajax({
        url: link,
        type: 'GET',
        dataType: 'json',
        success: function (response) {
            try {
                if (response.length == 1) {
                    const [valores] = response;
                    const { FIRST_NAME, LAST_NAME, FATHER_FIRST_NAME, FATHER_LAST_NAME, MOTHER_FIRST_NAME, MOTHER_LAST_NAME, ID_NUMBER, EXPIRY_DATE } = valores;
                    console.log(valores);
                    console.log("valores", LAST_NAME);
                    var Nome = document.querySelector("#nome");
                    Nome.innerHTML = FIRST_NAME + " " + LAST_NAME;
                    var NomeMae = document.querySelector("#nome_mae");
                    NomeMae.innerHTML = MOTHER_FIRST_NAME + " " + MOTHER_LAST_NAME;
                    var NomePai = document.querySelector("#nome_pai");
                    NomePai.innerHTML = FATHER_FIRST_NAME + " " + FATHER_LAST_NAME;
                    var NumBI = document.querySelector("#num_bi");
                    NumBI.innerHTML = ID_NUMBER;
                    var ExpData = document.querySelector("#expData");
                    ExpData.innerHTML = EXPIRY_DATE;
                    $("#resultado").show();
                }
                else {
                    toastr.info(
                        response.mensagem,
                        "Bilhete não encontrado",
                        {
                            showMethod: "slideDown",
                            hideMethod: "slideUp",
                            timeOut: 2000,
                        }
                    );
                }
            } catch (e) {
                toastr.error(e.mensagem)
            }
        }
    })
})

$('#NBi').on("input", function () {
    $("#resultado").hide();
}
);


// BIRTH_DATE: "1968-06-05"
// BIRTH_MUNICIPALITY_NAME: "LUIMBALE"
// BIRTH_PROVINCE_NAME: "HUAMBO"
// EXPIRY_DATE: "2028-08-22"
// FATHER_FIRST_NAME: "JOSÉ"
// FATHER_LAST_NAME: "DOMINGOS"
// FIRST_NAME: "ABEL"
// GENDER_NAME: "MASCULINO"
// ID_NUMBER: "000462602HO032"
// ISSUE_DATE: "2018-08-23"
// ISSUE_PLACE:"CAXITO"
// LAST_NAME: "DOMINGOS JOSÉ"
// MARITAL_STATUS_NAME: "Solteiro"
// MOTHER_FIRST_NAME: "ALBERTINA"
// MOTHER_LAST_NAME: "VISSOLELA"
// RESIDENCE_ADDRESS: "CASA Nº13"
// RESIDENCE_COMMUNE_NAME: null
// RESIDENCE_COUNTRY_NAME: "Angola"
// RESIDENCE_MUNICIPALITY_NAME: "DANDE"
// RESIDENCE_NEIGHBOR: "BAIRRO SASSA CÁRIA"
// RESIDENCE_PROVINCE_NAME: "BENGO"
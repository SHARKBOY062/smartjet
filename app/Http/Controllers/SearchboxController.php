<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SearchboxController extends Controller
{
    public function options(Request $request)
    {
        $origins = [
            ["code" => "GRU", "name" => "São Paulo (Guarulhos)"],
            ["code" => "CGH", "name" => "São Paulo (Congonhas)"],
            ["code" => "VCP", "name" => "Campinas (Viracopos)"],
            ["code" => "GIG", "name" => "Rio de Janeiro (Galeão)"],
            ["code" => "SDU", "name" => "Rio de Janeiro (Santos Dumont)"],
            ["code" => "BSB", "name" => "Brasília (Presidente Juscelino Kubitschek)"],
            ["code" => "CNF", "name" => "Belo Horizonte (Confins)"],
            ["code" => "SSA", "name" => "Salvador (Deputado Luís Eduardo Magalhães)"],
            ["code" => "REC", "name" => "Recife (Guararapes)"],
            ["code" => "FOR", "name" => "Fortaleza (Pinto Martins)"],
        ];

        $destinations = [
            ["code" => "POA", "name" => "Porto Alegre (Salgado Filho)"],
            ["code" => "CWB", "name" => "Curitiba (Afonso Pena)"],
            ["code" => "FLN", "name" => "Florianópolis (Hercílio Luz)"],
            ["code" => "NAT", "name" => "Natal (Aluízio Alves)"],
            ["code" => "MCZ", "name" => "Maceió (Zumbi dos Palmares)"],
            ["code" => "BPS", "name" => "Porto Seguro"],
            ["code" => "JPA", "name" => "João Pessoa (Presidente Castro Pinto)"],
            ["code" => "SLZ", "name" => "São Luís (Marechal Cunha Machado)"],
            ["code" => "MAO", "name" => "Manaus (Eduardo Gomes)"],
            ["code" => "BEL", "name" => "Belém (Val-de-Cans)"],
        ];

        // ✅ Lista de países (menu de origem)
        $countries = [
            ["id" => "BR",  "name" => "Brasil"],
            ["id" => "ALL", "name" => "Todos os destinos"],
            ["id" => "CL",  "name" => "Chile"],
            ["id" => "EC",  "name" => "Equador"],
            ["id" => "PE",  "name" => "Peru"],
            ["id" => "AR",  "name" => "Argentina"],
            ["id" => "CO",  "name" => "Colômbia"],
            ["id" => "UY",  "name" => "Uruguai"],
            ["id" => "PY",  "name" => "Paraguai"],
            ["id" => "DO",  "name" => "República Dominicana"],
        ];

        // ✅ Quando selecionar Brasil, aparece essa lista
        // (mantive exatamente seus códigos: rio/igu/fln/GRU/rec/nat)
        $citiesByCountry = [
            "BR" => [
                ["code" => "Rio", "name" => "Rio de Janeiro"],
                ["code" => "IGU", "name" => "Foz de Iguaçu"],
                ["code" => "FLN", "name" => "Florianópolis"],
                ["code" => "GRU", "name" => "São Paulo"],
                ["code" => "REC", "name" => "Recife"],
                ["code" => "NAT", "name" => "Natal"],
            ],
        ];

        // Mantém compatibilidade com seu front atual (que usa data.airports)
        $airports = array_values(array_reduce(
            array_merge($origins, $destinations),
            function ($acc, $item) {
                $acc[$item["code"]] = $item; // evita duplicados por code
                return $acc;
            },
            []
        ));

        return response()->json([
            "origins" => $origins,
            "destinations" => $destinations,

            // ✅ novos campos pro menu de origem por país/cidade
            "countries" => $countries,
            "cities_by_country" => $citiesByCountry,

            // compatibilidade com o front atual
            "airports" => $airports,

            "default" => [
                "tab" => "voos",
                "tripType" => "idaVolta",
                "passageiros" => 1,
            ],
        ]);
    }
}

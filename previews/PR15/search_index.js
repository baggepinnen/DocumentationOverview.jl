var documenterSearchIndex = {"docs":
[{"location":"gallery/#gallery","page":"Gallery","title":"Gallery","text":"","category":"section"},{"location":"gallery/","page":"Gallery","title":"Gallery","text":"CurrentModule = DocumentationOverview","category":"page"},{"location":"gallery/#Table","page":"Gallery","title":"Table","text":"","category":"section"},{"location":"gallery/","page":"Gallery","title":"Gallery","text":"Code:","category":"page"},{"location":"gallery/","page":"Gallery","title":"Gallery","text":"```@eval\nusing DocumentationOverview\nDocumentationOverview.table_md(DocumentationOverview)\n```","category":"page"},{"location":"gallery/","page":"Gallery","title":"Gallery","text":"Output:","category":"page"},{"location":"gallery/","page":"Gallery","title":"Gallery","text":"using DocumentationOverview\nDocumentationOverview.table_md(DocumentationOverview)","category":"page"},{"location":"gallery/#Table-with-signature-:strip_namespace","page":"Gallery","title":"Table with signature = :strip_namespace","text":"","category":"section"},{"location":"gallery/","page":"Gallery","title":"Gallery","text":"Code:","category":"page"},{"location":"gallery/","page":"Gallery","title":"Gallery","text":"```@eval\nusing DocumentationOverview\nDocumentationOverview.table_md(\n    DocumentationOverview;\n    signature = :strip_namespace,\n)\n```","category":"page"},{"location":"gallery/","page":"Gallery","title":"Gallery","text":"Output:","category":"page"},{"location":"gallery/","page":"Gallery","title":"Gallery","text":"using DocumentationOverview\nDocumentationOverview.table_md(\n    DocumentationOverview;\n    signature = :strip_namespace,\n)","category":"page"},{"location":"gallery/#Table-with-signature-:name","page":"Gallery","title":"Table with signature = :name","text":"","category":"section"},{"location":"gallery/","page":"Gallery","title":"Gallery","text":"Code:","category":"page"},{"location":"gallery/","page":"Gallery","title":"Gallery","text":"```@eval\nusing DocumentationOverview\nDocumentationOverview.table_md(\n    DocumentationOverview;\n    signature = :name,\n)\n```","category":"page"},{"location":"gallery/","page":"Gallery","title":"Gallery","text":"Output:","category":"page"},{"location":"gallery/","page":"Gallery","title":"Gallery","text":"using DocumentationOverview\nDocumentationOverview.table_md(\n    DocumentationOverview;\n    signature = :name,\n)","category":"page"},{"location":"gallery/#List","page":"Gallery","title":"List","text":"","category":"section"},{"location":"gallery/","page":"Gallery","title":"Gallery","text":"Code:","category":"page"},{"location":"gallery/","page":"Gallery","title":"Gallery","text":"```@eval\nusing DocumentationOverview\nDocumentationOverview.list_md(\n    DocumentationOverview;\n)\n```","category":"page"},{"location":"gallery/","page":"Gallery","title":"Gallery","text":"Output:","category":"page"},{"location":"gallery/","page":"Gallery","title":"Gallery","text":"using DocumentationOverview\nDocumentationOverview.list_md(\n    DocumentationOverview;\n)","category":"page"},{"location":"#DocumentationOverview.jl","page":"DocumentationOverview.jl","title":"DocumentationOverview.jl","text":"","category":"section"},{"location":"","page":"DocumentationOverview.jl","title":"DocumentationOverview.jl","text":"CurrentModule = DocumentationOverview","category":"page"},{"location":"#Summary","page":"DocumentationOverview.jl","title":"Summary","text":"","category":"section"},{"location":"","page":"DocumentationOverview.jl","title":"DocumentationOverview.jl","text":"using DocumentationOverview\nDocumentationOverview.table_md(\n    DocumentationOverview;\n    signature = :name,\n    apicolumn = \"Name\",\n)","category":"page"},{"location":"","page":"DocumentationOverview.jl","title":"DocumentationOverview.jl","text":"note: Note\nThe above table is generated using```@eval\nusing DocumentationOverview\nDocumentationOverview.table_md(\n    DocumentationOverview;\n    signature = :name,\n    apicolumn = \"Name\",\n)\n```For more examples, see Gallery.","category":"page"},{"location":"#Documentation","page":"DocumentationOverview.jl","title":"Documentation","text":"","category":"section"},{"location":"","page":"DocumentationOverview.jl","title":"DocumentationOverview.jl","text":"DocumentationOverview.table\nDocumentationOverview.list\nDocumentationOverview.table_md\nDocumentationOverview.list_md\nDocumentationOverview.find\nDocumentationOverview.API","category":"page"},{"location":"#DocumentationOverview.table","page":"DocumentationOverview.jl","title":"DocumentationOverview.table","text":"DocumentationOverview.table(module::Module; ...) -> table\nDocumentationOverview.table(fullnames::Expr; ...) -> table\nDocumentationOverview.table(apis; ...) -> table\n\nShow the table of APIs.\n\nThe table object returned from this function supports show method with text/plain, text/markdown, and text/html MIME types.\n\nTo preprocess the list of APIs, get a vector of APIs from find, process it, and pass it to DocumentationOverview.table as an iterable of APIs.  See also list.\n\nSee the Gallery for example outputs.\n\nExtended help\n\nArguments\n\nThe first argument specifies the list of APIs to be shown:\n\nmodule::Module: APIs discovered with find(module::Module; ...)\nfullnames::Expr: APIs are specified by the list of expression of form :[a.b.c, d.e.f, ...]\napis: an iterable that produces APIs\n\nKeyword Arguments\n\napicolumn::AbstractString = \"**API**\": The title for the API column.\nsignature: following values are supported:\nnothing (default): use the default signature.\n:name: use api.name; i.e., A.B.C.f(x, y) becomes f.\n:strip_namespace: strip the namespace part; i.e., A.B.C.f(x, y) becomes f(x, y).\na callabel object: it must map an API to a String which is used as a signature.\n\nKeyword arguments for find can also be passed with the method that takes module::Module .\n\nExamples\n\njulia> using DocumentationOverview\n\njulia> DocumentationOverview.table(DocumentationOverview)\n... a table of API printed ...\n\nDocumentationOverview.table also takes an expression (notice : before [) to manually list the APIs:\n\njulia> using DocumentationOverview\n\njulia> table = DocumentationOverview.table(:[  # ⇐ notice the `:` here\n           DocumentationOverview.table,\n           DocumentationOverview.API,\n       ]);\n\nThe list of APIs retrieved using PublicAPI.jl API can also be used with DocumentationOverview.table:\n\njulia> using PublicAPI\n\njulia> table = DocumentationOverview.table(PublicAPI.of(DocumentationOverview));\n\n\n\n\n\n","category":"function"},{"location":"#DocumentationOverview.list","page":"DocumentationOverview.jl","title":"DocumentationOverview.list","text":"DocumentationOverview.list(module::Module; ...) -> list\nDocumentationOverview.list(fullnames::Expr; ...) -> list\nDocumentationOverview.list(apis; ...) -> list\n\nShow the list of APIs.\n\nThe list object returned from this function supports show method with text/plain, text/markdown, and text/html MIME types.\n\nTo preprocess the list of APIs, get a vector of APIs from find, process it, and pass it to DocumentationOverview.list as an iterable of APIs.  See also table.\n\nSee the Gallery for example outputs.\n\nExtended help\n\nArguments\n\nThe first argument specifies the list of APIs to be shown:\n\nmodule::Module: APIs discovered with find(module::Module; ...)\nfullnames::Expr: APIs are specified by the list of expression of form :[a.b.c, d.e.f, ...]\napis: an iterable that produces APIs\n\nKeyword Arguments\n\nsignature: following values are supported:\nnothing (default): use the default signature.\n:name: use api.name; i.e., A.B.C.f(x, y) becomes f.\n:strip_namespace: strip the namespace part; i.e., A.B.C.f(x, y) becomes f(x, y).\na callabel object: it must map an API to a String which is used as a signature.\n\nKeyword arguments for find can also be passed with the method that takes module::Module .\n\nExamples\n\njulia> using DocumentationOverview\n\njulia> DocumentationOverview.list(DocumentationOverview)\n... a list of API printed ...\n\nDocumentationOverview.list also takes an expression (notice : before [) to manually list the APIs:\n\njulia> using DocumentationOverview\n\njulia> list = DocumentationOverview.list(:[  # ⇐ notice the `:` here\n           DocumentationOverview.list,\n           DocumentationOverview.API,\n       ]);\n\nThe list of APIs retrieved using PublicAPI.jl API can also be used with DocumentationOverview.list:\n\njulia> using PublicAPI\n\njulia> list = DocumentationOverview.list(PublicAPI.of(DocumentationOverview));\n\n\n\n\n\n","category":"function"},{"location":"#DocumentationOverview.table_md","page":"DocumentationOverview.jl","title":"DocumentationOverview.table_md","text":"DocumentationOverview.table_md(args...; options...) -> md::Markdown.MD\n\nA shorthand for Markdown.MD(DocumentationOverview.table(args...; options...)).\n\n\n\n\n\n","category":"function"},{"location":"#DocumentationOverview.list_md","page":"DocumentationOverview.jl","title":"DocumentationOverview.list_md","text":"DocumentationOverview.list_md(args...; options...) -> md::Markdown.MD\n\nA shorthand for Markdown.MD(DocumentationOverview.list(args...; options...)).\n\n\n\n\n\n","category":"function"},{"location":"#DocumentationOverview.find","page":"DocumentationOverview.jl","title":"DocumentationOverview.find","text":"DocumentationOverview.find(module::Module; [include]) -> apis::Vector{<:API}\n\nList APIs in module.\n\nExtended help\n\nKeyword Arguments\n\ninclude: a callable of form include(api::API) -> should_include::Bool.  The apis are included in the output if and only if this function returns true.  The default function is eauivalent to api -> api.hasdoc.\n\nExamples\n\njulia> using DocumentationOverview\n\njulia> for api in DocumentationOverview.find(DocumentationOverview)\n           @show api.name\n       end\napi.name = :API\napi.name = :find\napi.name = :table\n\n\n\n\n\n","category":"function"},{"location":"#DocumentationOverview.API","page":"DocumentationOverview.jl","title":"DocumentationOverview.API","text":"DocumentationOverview.API\n\nAn object passed to include callback of table.\n\nAPI has the following properties settable using Accessors.@set:\n\nmodule::Module: the module in which the API is discovered.\nname::Symbol: the name of the API.\nexported::Bool: true iff the API is exported from api.module.\nsignature::String: \"signature\" of the API; if api.hasdoc (see below), it defaults to the first line of the docstring; otherwise, it defaults to the fully qualified name of the API.\n\nIt also has the following derived properties that are not settable with Accessors.@set:\n\nhasdoc::Bool: indicate if the API has a docstring.\ndoc::Union{Markdown.MD,Nothing}: docstring of the API.\n\n\n\n\n\n","category":"type"}]
}

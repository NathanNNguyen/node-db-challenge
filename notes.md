## Tables: project, resource, task

project(one) <==> task(many)
project(many) <==> resource(many)

### Tables entities

project
- id
- project_name (required)
- project_desc
- completed (notNullable, default(false))

resource
- id
- resource_name (required, unique)
- resource_desc

task
- id
- task_desc (required)
- notes (addional info)
- completed (notNullable, default(false))
- project_id

ps
- project_id
- resource_id
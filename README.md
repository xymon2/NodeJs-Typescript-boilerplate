# NodeJs-typescript-boilerplate
jest, ts, docker, express
routes controller service pattern

# Docker

    docker build --tag {image name}:{tag} .

docker image name
- server-dev-img
- sever-img
- server-test-img

compose yml 알아서 상황에 맞춰 만드셈.

    docker-compose -f docker-compose.server.yml up -d
    docker-compose -f docker-compose.dev.yml down
    docker-compose -f  docker-compose.dev.yml up -d --force-recreate


## run 
repo/image 이름 변경 및 DB compose yml 만드셈

    npm run dev - dev server (docker) 시작
    npm run test - unit test
    npm run test:integ -integ test


## dev
docker-compose.dev.yml

울랄라

## integ test
docker-compose.test.yml

울랄라

## dockerignore
db 폴더 넣을 것


# 기타 명령어

## git
git checkout -b issue-n dev # 'dev' 최신 커밋을 기준으로 새로운 새로운 브랜치 'issue-n'을 만들고 이 branch로 checkout
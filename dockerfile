FROM node:18.8.0 as builder


WORKDIR /app

COPY package.json /app/package.json
RUN npm install
RUN npm install react-scripts@5.0.1 -g

# FROM nginx:latest
# # nginx의 기본 설정을 삭제하고 앱에서 설정한 파일을 복사
# RUN rm -rf /etc/nginx/conf.d
# COPY conf /etc/nginx

# # 위에서 생성한 앱의 빌드산출물을 nginx의 샘플 앱이 사용하던 폴더로 이동
# COPY --from=builder /app/build /usr/share/nginx/html

# 80포트 오픈하고 nginx 실행
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]
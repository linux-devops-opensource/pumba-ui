apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app.kubernetes.io/component: ui
    app.kubernetes.io/name: pumba-ui
    app.kubernetes.io/part-of: pumba
    app.kubernetes.io/managed-by: argocd
  name: pumba-ui
  namespace: pumba
spec:
  selector:
    matchLabels:
      app.kubernetes.io/name: pumba-ui
  strategy:
    rollingUpdate:
      maxSurge: 25%
      maxUnavailable: 25%
    type: RollingUpdate
  template:
    metadata:
      labels:
        app.kubernetes.io/name: pumba-ui
    spec:
      containers:
      - image: gcr.io/GOOGLE_CLOUD_PROJECT/pumba-ui:COMMIT_SHA
        name: pumba-ui
        ports:
        - containerPort: 80
          protocol: TCP
        resources:
          requests:
              memory: "50Mi"
              cpu: "50m"
          limits:
              memory: "250Mi"
              cpu: "250m"

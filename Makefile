
sse:
	cd apps/mcp-order-server && node sse-server.js

stdio:
	cd apps/mcp-order-server && node stdio-server.js

chat:
	cd apps/chatbot-webapp && npm run dev

api:
	cd apps/products-api && npm run build && npm run start

inspector:
	npx @modelcontextprotocol/inspector

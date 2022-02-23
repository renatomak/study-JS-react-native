const Config = {
    API_URL: "http://192.168.0.17:3000/",
    BASE_URL: "https://dev-keycloak.sumicity.net.br/auth/realms/sumicity-admin/protocol/openid-connect/token",
    TIMEOUT_REQUEST: 5000,
    HEADER_REQUEST: {
        Accept: 'application/json'
    },
    HEADER_LOGIN: {
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/x-www-form-urlencoded',
        Authorization:
          'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJuSC1mc2ptS2cyaGRkUTJhT2ZROFBSVFJncmQ0bk5MMHhhNHR5djB1SmpNIn0.eyJleHAiOjE2MzMwMjUxODEsImlhdCI6MTYzMzAyNDg4MSwianRpIjoiYzUxZjI4MDItNTA1Ny00MzUzLTlhNDYtZGQ2MTdhODk0NzVhIiwiaXNzIjoiaHR0cHM6Ly9kZXYta2V5Y2xvYWsuc3VtaWNpdHkubmV0LmJyL2F1dGgvcmVhbG1zL3N1bWljaXR5LWFkbWluIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjFmMTRlNzllLTQxYmUtNDFkNi1iNjRmLTEzYjc2OTlhODUyYiIsInR5cCI6IkJlYXJlciIsImF6cCI6InN1bWljaXR5LXBhbmVsLWFkbWluIiwic2Vzc2lvbl9zdGF0ZSI6ImVmZDBiNTQwLTk4YWQtNGI2MC1iYjdkLTQyODMxN2ZiMGY0OCIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiKiJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiUk9MRV9DT05ORUNUTUFTVEVSX0RBU0hCT0FSRCIsIlJPTEVfQ09OTkVDVE1BU1RFUl9WSUVXRVJfUE9JTlQiLCJST0xFX0VDQVJFX1BBTkVMX0FDQ0VTUyIsIlJPTEVfQ09OTkVDVE1BU1RFUl9QQU5FTF9BQ0NFU1MiLCJST0xFX0NFTlRSQUxBU1NJTkFOVEVfUEFORUxfQUNDRVNTIiwiUk9MRV9BU1NJTkVfRlVMTF9BQ0NFU1MiLCJST0xFX0VDQVJFX1ZJRVdfSU5DSURFTlQiLCJST0xFX0NPTk5FQ1RNQVNURVJfRURJVF9WSUFCSUxJVFkiLCJST0xFX0NPTk5FQ1RNQVNURVJfRlVMTF9BQ0NFU1MiLCJST0xFX0NPTk5FQ1RNQVNURVJfUkVTRVJWRV9QT0lOVCIsIlJPTEVfQ09OTkVDVE1BU1RFUl9SRVNFUlZFX1dJVEhPVVRfQ09OVFJBQ1QiLCJST0xFX0NPTk5FQ1RNQVNURVJfVklFV0VSX1JFUE9SVCIsIlJPTEVfQUdFTlRFQ1JFREVOQ0lBRE9fREFTSEJPQVJEIiwiUk9MRV9DT05ORUNUTUFTVEVSX0VESVRfUkVTRVJWRSIsIm9mZmxpbmVfYWNjZXNzIiwiUk9MRV9FQ0FSRV9DTE9TRV9JTkNJREVOVCIsInVtYV9hdXRob3JpemF0aW9uIiwiUk9MRV9PRkZJQ0VUUkFDS19GVUxMX0FDQ0VTUyIsIlJPTEVfRUNBUkVfVklFV19ERVRBSUxFRF9JTkNJREVOVCIsIlJPTEVfRUNBUkVfQUREX0lOVEVSQUNUSU9OX0lOQ0lERU5UIiwiUk9MRV9BU1NJTkVfVklFV19FUlJPUlMiLCJST0xFX0FTU0lORV9QQU5FTF9BQ0NFU1MiLCJST0xFX0NPTk5FQ1RNQVNURVJfVklFV0VSX0RBU0hCT0FSRCIsIlJPTEVfQ09OTkVDVE1BU1RFUl9VU0VSX1dPQyIsIlJPTEVfQVNTSU5FX1ZJRVdfQ0lUSUVTIiwiUk9MRV9DT05ORUNUTUFTVEVSX0VESVRfUEFSQU1FVEVSUyIsIlJPTEVfQ0VOVFJBTEFTU0lOQU5URV9GVUxMX0FDQ0VTUyIsIlJPTEVfQ09OTkVDVE1BU1RFUl9WSUVXRVJfVklBQklMSVRZIiwiUk9MRV9FQ0FSRV9WSUVXX0RBU0hCT0FSRCIsIlJPTEVfQ09OTkVDVE1BU1RFUl9FRElUX0NJVElFUyIsIlJPTEVfQ09OTkVDVE1BU1RFUl9VU0VSX1NVTUlDSVRZIiwiUk9MRV9PRkZJQ0VUUkFDS19QQU5FTF9BQ0NFU1MiLCJST0xFX0FHRU5URUNSRURFTkNJQURPX0ZVTExfQUNDRVNTIiwiUk9MRV9DT05ORUNUTUFTVEVSX1RSQU5TRkVSX1BPSU5UIiwiUk9MRV9BR0VOVEVDUkVERU5DSUFET19MSU1JVEVEX0FDQ0VTUyIsIlJPTEVfQVNTSU5FX0xJTUlURURfQUNDRVNTIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJwcm9maWxlIGVtYWlsIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoiV2lsbGlhbSBTaWx2YSIsInByZWZlcnJlZF91c2VybmFtZSI6InNpbHZhLndpbGxpYW0iLCJnaXZlbl9uYW1lIjoiV2lsbGlhbSIsImZhbWlseV9uYW1lIjoiU2lsdmEifQ.McA5ysgZyfwrJi8R5dO_d3MJy7Al7a47mvXTlaIgz0EUIO24JoxwnJfCVa4BHfD3hvh0M6lvlghhDhtlZWA74WFR1XwjDizUp5_XuGbnsHdmwyxYMgKut-ebJGQsjmwiD2GjdEgXcf9U_yusqXQL5n5Gdk7TwnT0xYY_SQyEDIp1Knywcod-sRko9z7dHSVFpufLcsMOuoxEHewoK3CXQjTVPha9qQEnPw6Pxt5xaFHSxZ94AhYm_h7uYe2xL0KMJrAzFG5LttM4w345nY67Zv4YGim9-qCcWnxI0kBJ5RpUNqYdNU-4iXf3X5w4clOctst8lryuJ41AZJBMMng9lg',
      },
}
export default Config;
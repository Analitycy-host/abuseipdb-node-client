import fetch from "node-fetch";

interface AbuseData {
    ipAddress?: string,
    isPublic?: boolean,
    ipVersion?: number,
    isWhitelisted?: boolean,
    abuseConfidenceScore?: number,
    countryCode?: string,
    usageType?: string,
    isp?: string,
    domain?: string,
    hostnames?: [],
    totalReports?: number,
    numDistinctUsers?: number,
    lastReportedAt?: string,
}

interface Config {
    key?: string
}

export default class AbuseIPDBClient {

    key?: string;

    public constructor(config: Config = {}) {
        this.key = config.key || process.env.ABUSEIPDB_API_KEY
    }

    async checkIP(ip:string): Promise<AbuseData> {
        let request = await fetch(`https://api.abuseipdb.com/api/v2/check?ipAddress=${ip}`, {
            //@ts-ignore
            headers: {
                "User-Agent": "AbuseIPDB-Node-Client",
                "Key": this.key
            }
        })
        let response = await request.json()
        return response.data
    }
}
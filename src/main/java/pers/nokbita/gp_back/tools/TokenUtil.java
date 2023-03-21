package pers.nokbita.gp_back.tools;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import java.util.Date;

public class TokenUtil {
    // 过期时间，单位毫秒，30天过期
    private static final long EXPIRE = 30 * 24 * 60 * 60 * 1000L;
    // 32 位密钥，”洛阳师范学院计科_nokbita“
    private static final String SECRET_KEY = "luoyangshifanxueyuanjike_nokbita";

    // 生成 Token
    public static String generateToken(String subject) {
        // 签发时间
        Date issuedAt = new Date();
        // 过期时间
        Date expirationAt = new Date(issuedAt.getTime() + EXPIRE);

        return Jwts.builder()
                // 头部参数
                .setHeaderParam("type", "JWT")
                // 主题（负载）
                .setSubject(subject)
                // 签发时间
                .setIssuedAt(issuedAt)
                // 过期时间
                .setExpiration(expirationAt)
                // 签名算法
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY)
                // 订立，合成
                .compact();
    }

    // 获取负载
    public static Claims getClaimsByToken(String token) {
        return Jwts.parser()
                .setSigningKey(SECRET_KEY)
                .parseClaimsJws(token)
                .getBody();
    }
}

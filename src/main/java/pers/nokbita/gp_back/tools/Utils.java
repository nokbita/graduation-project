package pers.nokbita.gp_back.tools;

import java.io.File;
import java.util.Base64;

public class Utils {
    public static boolean isNull(String str) {
        return str == null || str.trim().equals("");
    }

    public static String getBase64FileType(String dataURL) {
        String[] base64Arr = dataURL.split(",");
        // 例如 data:image/png;base64
        String front = base64Arr[0];
        // 例如 image/png
        String type = front.substring(front.indexOf(":") + 1, front.indexOf(";"));
        // 例如 png
        String fileType = type.substring(type.indexOf("/") + 1);
        return fileType;
    }

    public static String getBase64Data(String dataURL) {
        String[] base64Arr = dataURL.split(",");
        String base64Data = base64Arr[1];
        return base64Data;
    }

    public static byte[] base64ToBytes(String base64Data) {
        Base64.Decoder decoder = Base64.getDecoder();
        byte[] imgBytes = decoder.decode(base64Data);
        for (int i = 0; i < imgBytes.length; i++) {
            if (imgBytes[i] < 0) {
                imgBytes[i] += 256;
            }
        }
        return imgBytes;
    }

    public static void mkdirs(String path) {
        File file = new File(path);
        if (!file.exists()) {
            file.mkdirs();
        }
    }


}

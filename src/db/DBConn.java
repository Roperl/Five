package db;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.mysql.jdbc.Statement;

public class DBConn {
	//url="jdbc:mysql://localhost:3306/five?useUnicode=true&characterEncod";
	static {                                        //静态块，在类加载的时候自动运行
		try {
			Class.forName("com.mysql.jdbc.Driver"); //执行时加载访问数据库所需驱动程序（""）
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
	}
 
	public static Connection getConnection() {        //这个getConnection方法使用驱动程序和具体的数据库建立连接
		Connection con = null;
		String url = "jdbc:mysql://localhost:3306/five?useUnicode=true&characterEncod";  //服务器地址，端口，数据库名
		String userName = "root";                    //数据库用户名
		String pwd = "123456";                         // 数据库密码
		try {
			con = DriverManager.getConnection(url, userName, pwd);
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return con;                      //返回值是一个Connection对象
	}
 
	public static void closeConnection(ResultSet rs, Statement st, Connection conn) {      
		if (rs != null) {                      //closeConnection方法作用，关闭已建立的链接，清空资源     
			try {                              //结果集(ResultSet)是数据中查询结果返回的一种对象，可以说结果集是一个存储查询结果的对象
				rs.close();                    //　Statement()方法 是 Java 执行数据库操作的一个重要方法，用于在已经建立数据库连接的基础上，向数据库发送要执行的SQL语句。
				                                //     Statement对象，用于执行不带参数的简单SQL语句。
			} catch (SQLException e) {                 
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		if (st != null) {
			try {
				st.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		if (conn != null) {
			try {
				conn.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
 
	}

}


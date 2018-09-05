package db;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.mysql.jdbc.Statement;

public class DBConn {
	//url="jdbc:mysql://localhost:3306/five?useUnicode=true&characterEncod";
	static {                                        //��̬�飬������ص�ʱ���Զ�����
		try {
			Class.forName("com.mysql.jdbc.Driver"); //ִ��ʱ���ط������ݿ�������������""��
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
	}
 
	public static Connection getConnection() {        //���getConnection����ʹ����������;�������ݿ⽨������
		Connection con = null;
		String url = "jdbc:mysql://localhost:3306/five?useUnicode=true&characterEncod";  //��������ַ���˿ڣ����ݿ���
		String userName = "root";                    //���ݿ��û���
		String pwd = "123456";                         // ���ݿ�����
		try {
			con = DriverManager.getConnection(url, userName, pwd);
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return con;                      //����ֵ��һ��Connection����
	}
 
	public static void closeConnection(ResultSet rs, Statement st, Connection conn) {      
		if (rs != null) {                      //closeConnection�������ã��ر��ѽ��������ӣ������Դ     
			try {                              //�����(ResultSet)�������в�ѯ������ص�һ�ֶ��󣬿���˵�������һ���洢��ѯ����Ķ���
				rs.close();                    //��Statement()���� �� Java ִ�����ݿ������һ����Ҫ�������������Ѿ��������ݿ����ӵĻ����ϣ������ݿⷢ��Ҫִ�е�SQL��䡣
				                                //     Statement��������ִ�в��������ļ�SQL��䡣
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


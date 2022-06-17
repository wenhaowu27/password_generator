   //Javascript to generate password from user input phrase
    $(document).ready(function() {      
                
          //c stand for character, n stand for number
          var c_a = ['a','A','4','@'];
          var c_b = ['B','6','b','8'];
          var c_c = ['C','c','('];
          var c_d = ['D','d'];
          var c_e = ['e','E','3'];
          var c_f = ['f','F'];
          var c_g = ['g','G','9'];
          var c_h = ['H','h'];
          var c_i = ['I','1','i'];
          var c_j = ['J','j'];
          var c_k = ['k','K'];
          var c_l = ['l','L','1','|','!'];
          var c_m = ['m','M'];
          var c_n = ['n','N'];
          var c_o = ['0','o','O'];
          var c_p = ['P','p'];
          var c_q = ['Q','q','9'];
          var c_r = ['R','r'];
          var c_s = ['$','&','5','S','s'];
          var c_t = ['T','t','7'];
          var c_u = ['U','u'];
          var c_v = ['V','v','^'];
          var c_w = ['W','w'];
          var c_x = ['X','x','*'];
          var c_y = ['Y','y'];
          var c_z = ['Z','z','2'];
          var c_aps = ["'",'"','`'];
          var n_1 = ['I','l','1'];
          var n_2 = ['z','Z','2'];
          var n_3 = ['3','E'];
          var n_4 = ['4','A','h'];
          var n_5 = ['5','S','s'];
          var n_6 = ['6','b'];
          var n_7 = ['7','T','J'];
          var n_8 = ['8','B'];
          var n_9 = ['9','g'];
          var n_0 = ['0','O','o'];
          var s_p = ['~','@','#','$','%','&','*','.',':',';','?','/']
          
          //Random pick character from each alphabat array

          var a_rand = c_a[Math.floor(Math.random()*c_a.length)];
          var b_rand = c_b[Math.floor(Math.random()*c_b.length)];
          var c_rand = c_c[Math.floor(Math.random()*c_c.length)];
          var d_rand = c_d[Math.floor(Math.random()*c_d.length)];
          var e_rand = c_e[Math.floor(Math.random()*c_e.length)];
          var f_rand = c_f[Math.floor(Math.random()*c_f.length)];
          var g_rand = c_g[Math.floor(Math.random()*c_g.length)];
          var h_rand = c_h[Math.floor(Math.random()*c_h.length)];
          var i_rand = c_i[Math.floor(Math.random()*c_i.length)];
          var j_rand = c_j[Math.floor(Math.random()*c_j.length)];
          var k_rand = c_k[Math.floor(Math.random()*c_k.length)];
          var l_rand = c_l[Math.floor(Math.random()*c_l.length)];
          var m_rand = c_m[Math.floor(Math.random()*c_m.length)];
          var n_rand = c_n[Math.floor(Math.random()*c_n.length)];
          var o_rand = c_o[Math.floor(Math.random()*c_o.length)];
          var p_rand = c_p[Math.floor(Math.random()*c_p.length)];
          var q_rand = c_q[Math.floor(Math.random()*c_q.length)];
          var r_rand = c_r[Math.floor(Math.random()*c_r.length)];
          var s_rand = c_s[Math.floor(Math.random()*c_s.length)];
          var t_rand = c_t[Math.floor(Math.random()*c_t.length)];
          var u_rand = c_u[Math.floor(Math.random()*c_u.length)];
          var v_rand = c_v[Math.floor(Math.random()*c_v.length)];
          var w_rand = c_w[Math.floor(Math.random()*c_w.length)];
          var x_rand = c_x[Math.floor(Math.random()*c_x.length)];
          var y_rand = c_y[Math.floor(Math.random()*c_y.length)];
          var z_rand = c_z[Math.floor(Math.random()*c_z.length)];
          var aps_rand = c_aps[Math.floor(Math.random()*c_aps.length)];
          var n0_rand = n_0[Math.floor(Math.random()*n_0.length)];
          var n1_rand = n_1[Math.floor(Math.random()*n_1.length)];
          var n2_rand = n_2[Math.floor(Math.random()*n_2.length)];
          var n3_rand = n_3[Math.floor(Math.random()*n_3.length)];
          var n4_rand = n_4[Math.floor(Math.random()*n_4.length)];
          var n5_rand = n_5[Math.floor(Math.random()*n_5.length)];
          var n6_rand = n_6[Math.floor(Math.random()*n_6.length)];
          var n7_rand = n_7[Math.floor(Math.random()*n_7.length)];
          var n8_rand = n_8[Math.floor(Math.random()*n_8.length)];
          var n9_rand = n_9[Math.floor(Math.random()*n_9.length)];
          var nsp_rand = s_p[Math.floor(Math.random()*s_p.length)];
          

          //Function of character conversation
          
                    function char_conversion(char_input){       
                      var new_char;                    
                        switch (char_input) {
                          case 'a':
                            new_char = c_a[Math.floor(Math.random()*c_a.length)];
                            break;
                          case 'b':
                            new_char = c_b[Math.floor(Math.random()*c_b.length)];
                            break;
                          case 'c':
                            new_char = c_c[Math.floor(Math.random()*c_c.length)];
                            break;
                          case 'd':
                            new_char = c_d[Math.floor(Math.random()*c_d.length)];
                            break;
                          case 'e':
                            new_char = c_e[Math.floor(Math.random()*c_e.length)];
                            break;
                        
                          case 'f':
                            new_char = c_f[Math.floor(Math.random()*c_f.length)];
                            break;
                          case 'g':
                            new_char = c_g[Math.floor(Math.random()*c_g.length)];
                            break;
                          case 'h':
                            new_char = c_h[Math.floor(Math.random()*c_h.length)];
                            break;
                          case 'i':
                            new_char = c_i[Math.floor(Math.random()*c_i.length)];
                            break;
                          case 'j':
                            new_char = c_j[Math.floor(Math.random()*c_j.length)];
                            break;
                          case 'k':
                            new_char = c_k[Math.floor(Math.random()*c_k.length)];
                            break;
                          case 'l':
                            new_char = c_l[Math.floor(Math.random()*c_l.length)];
                            break;
                          case 'm':
                            new_char = c_m[Math.floor(Math.random()*c_m.length)];
                            break;
                          case 'n':
                            new_char = c_n[Math.floor(Math.random()*c_n.length)];
                            break;
                          case 'o':
                            new_char = c_o[Math.floor(Math.random()*c_o.length)];
                            break;
                          case 'p':
                            new_char = c_p[Math.floor(Math.random()*c_p.length)];
                            break;
                          case 'q':
                            new_char = c_q[Math.floor(Math.random()*c_q.length)];
                            break;
                          case 'r':
                            new_char = c_r[Math.floor(Math.random()*c_r.length)];
                            break;
                          case 's':
                            new_char = c_s[Math.floor(Math.random()*c_s.length)];
                            break;              
                          case 't':
                            new_char = c_t[Math.floor(Math.random()*c_t.length)];
                            break;
                          case 'u':
                            new_char = c_u[Math.floor(Math.random()*c_u.length)];
                            break;
                          case 'v':
                            new_char = c_v[Math.floor(Math.random()*c_v.length)];
                            break;
                          case 'w':
                            new_char = c_w[Math.floor(Math.random()*c_w.length)];
                            break;
                          case 'x':
                            new_char = c_x[Math.floor(Math.random()*c_x.length)];
                            break;
                          case 'y':
                            new_char = c_y[Math.floor(Math.random()*c_y.length)];
                            break;
                          case 'z':
                            new_char = c_z[Math.floor(Math.random()*c_z.length)];
                            break;
                          case '0':
                            new_char = n_0[Math.floor(Math.random()*n_0.length)];
                            break;
                          case '1':
                            new_char = n_1[Math.floor(Math.random()*n_1.length)];
                            break;
                          case '2':
                            new_char = n_2[Math.floor(Math.random()*n_2.length)];
                            break;
                          case '3':
                            new_char = n_3[Math.floor(Math.random()*n_3.length)];
                            break;
                          case '4':
                            new_char = n_4[Math.floor(Math.random()*n_4.length)];
                            break;
                          case '5':
                            new_char = n_5[Math.floor(Math.random()*n_5.length)];
                            break;
                          case '6':
                            new_char = n_6[Math.floor(Math.random()*n_6.length)];
                            break;
                          case '7':
                            new_char = n_7[Math.floor(Math.random()*n_7.length)];
                            break;
                          case '8':
                            new_char = n_8[Math.floor(Math.random()*n_8.length)];
                            break;
                          case '9':
                            new_char = n_9[Math.floor(Math.random()*n_9.length)];
                            break;
                          case '_':
                            new_char = '_';
                            break;
                          case '-':
                            new_char = '-';
                            break;                  
                          case "'":
                            new_char = new_char = c_aps[Math.floor(Math.random()*c_aps.length)];
                            break;                  
                          case ' ':
                            new_char = '';
                            break;                  
                          default:
                              new_char = s_p[Math.floor(Math.random()*s_p.length)];
                            break;
                        }        
                        return new_char      
                    }
  
          $(document).on("click","#pwGen", function() {
            var inputPhrase = $("#pwdInput").val().trim();   
            //Split phrase into individual character        
            var strArr = inputPhrase.toLowerCase().split('');
            //Loop string array through character conversation
            var pwdArr = [];
            var pwdArr_reverse = [];
            var new_pwd = [];
            var new_pwd_Reverse = [];
            var pwdDiv = $('#pwdOutput');
            // To generate 5 new passwords
            for (var i = 0; i < 10; i++) {
              for (let j = 0; j < strArr.length; j++) {
                pwdArr.push(char_conversion(strArr[j]))
              };

              //reverse string to backward             
              var l = 0
              for (let k = pwdArr.length; k >= 0; k--){                
                pwdArr_reverse [l] = pwdArr[k];
                l++
              }

              // Assembly character back to string/phrase
              nsp_rand = s_p[Math.floor(Math.random()*s_p.length)]
              new_pwd[i] = pwdArr.join("") + nsp_rand;
              nsp_rand = s_p[Math.floor(Math.random()*s_p.length)]
              new_pwd_Reverse[i] = pwdArr_reverse.join("") + nsp_rand;
              pwdArr = [];
              pwdArr_reverse = [];                  
              pwdDiv.after('<tr><th>' + new_pwd[i]+ '</th><th>' + new_pwd_Reverse[i] + '</th></tr>')
            }
            //end of 5 iteration
          });

          $(document).on("click","#refresh", function() {
            location.reload();
          });
      
        });